import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main/main.service';

import Map from 'ol/Map';
import View from 'ol/View';
import { applyTransform } from 'ol/extent';
import TileLayer from 'ol/layer/Tile';
import { get as getProjection, getTransform } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import OSM from 'ol/source/OSM';
import TileImage from 'ol/source/TileImage';
import proj4 from 'proj4';
import { Layer } from 'ol/layer';
import { HttpClient } from '@angular/common/http';

interface EpsgIOResponse {
  status: string;
  number_result: number;
  results: EpsgIoResult[];
}

interface EpsgIoResult {
  accuracy: string;
  area: string;
  bbox: number[];
  code: string;
  default_trans: number;
  kind: string;
  name: string;
  proj4: string;
  trans: any[];
  unit: string;
  wkt: string;
}

@Component({
  selector: 'app-reprojection-by-code',
  templateUrl: './reprojection-by-code.component.html',
  styleUrls: ['./reprojection-by-code.component.css']
})
export class ReprojectionByCodeComponent implements OnInit {

  private map: Map;

  public query = '';
  public resultSpan: string;

  constructor(
    private http: HttpClient,
    private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    //
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: new View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 1
      })
    });
  }

  setProjection(code, name, proj4def, bbox) {
    if (code === null || name === null || proj4def === null || bbox === null) {
      this.resultSpan = 'Nothing usable found, using EPSG:3857...';
      this.map.setView(new View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 1
      }));
      return;
    }

    this.resultSpan = `(${code}) ${name}`;

    const newProjCode = `EPSG:${code}`;
    proj4.defs(newProjCode, proj4def);
    register(proj4);
    const newProj = getProjection(newProjCode);
    const fromLonLat = getTransform('EPSG:4326', newProj);

    // very approximate calculation of projection extent
    const extent = applyTransform(
      [bbox[1], bbox[2], bbox[3], bbox[0]], fromLonLat);
    newProj.setExtent(extent);
    const newView = new View({
      projection: newProj
    });
    this.map.setView(newView);
    newView.fit(extent);
  }

  search(event: MouseEvent) {
    this.resultSpan = 'Searching ...';

    this.http
      .get<EpsgIOResponse>(
        `https://epsg.io/?format=json&q=${this.query}`,
        { observe: 'body', responseType: 'json' })
      .subscribe((response: EpsgIOResponse) => {
        const results = response.results;
        if (!(results) && results.length <= 0) {
          return;
        }

        for (let i = 0, ii = results.length; i < ii; i++) {
          const result = results[i];
          if (!(result)) {
            continue;
          }

          const code = result.code;
          const name = result.name;
          const proj4def = result.proj4;
          const bbox = result.bbox;
          if (code && code.length > 0 &&
            proj4def && proj4def.length > 0 &&
            bbox && bbox.length === 4) {
            this.setProjection(code, name, proj4def, bbox);
            return;
          }
        }

        this.setProjection(null, null, null, null);
      });

    event.preventDefault();
  }

  setRenderEdges(event: Event) {
    const check = (event.target as HTMLInputElement).checked;
    this.map.getLayers().forEach((layer: Layer) => {
      if (!(layer instanceof TileLayer)) {
        return;
      }

      const source = layer.getSource();
      if (!(source instanceof TileImage)) {
        return;
      }

      source.setRenderReprojectionEdges(check);
    });
  }
}
