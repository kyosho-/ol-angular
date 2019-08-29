import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { MainService } from '../../../main/main.service';

import Map from 'ol/Map';
import View from 'ol/View';
import { Extent, getWidth, getCenter } from 'ol/extent';
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer';
import { fromLonLat, toLonLat } from 'ol/proj';
import { ImageCanvas as ImageCanvasSource, Stamen } from 'ol/source';
import Projection from 'ol/proj/Projection';
import { Size } from 'ol/size';

import * as d3 from 'd3';

import * as topojson from 'topojson';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {

  private map: Map;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new Stamen({
            layer: 'watercolor'
          })
        })
      ],
      target: 'map',
      view: new View({
        center: fromLonLat([-97, 38]),
        zoom: 4
      })
    });

    from(d3.json('assets/example/data/topojson/us.json')).pipe(
      map((us: any) => {
        const features = topojson.feature(us, us.objects.counties);
        return features;
      })
    ).subscribe((features: any) => {
      const renderCanvas = (
        extent: Extent,
        resolution: number,
        pixelRatio: number,
        size: Size,
        projection: Projection
      ) => {
        const canvasWidth = size[0];
        const canvasHeight = size[1];

        const canvas = d3.select(document.createElement('canvas'));
        canvas.attr('width', canvasWidth).attr('height', canvasHeight);

        const context = canvas.node().getContext('2d');

        const d3Projection = d3.geoMercator().scale(1).translate([0, 0]);
        let d3Path = d3.geoPath().projection(d3Projection);

        const pixelBounds = d3Path.bounds(features);
        const pixelBoundsWidth = pixelBounds[1][0] - pixelBounds[0][0];
        const pixelBoundsHeight = pixelBounds[1][1] - pixelBounds[0][1];

        const geoBounds = d3.geoBounds(features);
        const geoBoundsLeftBottom = fromLonLat(geoBounds[0], projection);
        const geoBoundsRightTop = fromLonLat(geoBounds[1], projection);
        let geoBoundsWidth = geoBoundsRightTop[0] - geoBoundsLeftBottom[0];
        if (geoBoundsWidth < 0) {
          geoBoundsWidth += getWidth(projection.getExtent());
        }
        const geoBoundsHeight = geoBoundsRightTop[1] - geoBoundsLeftBottom[1];

        const widthResolution = geoBoundsWidth / pixelBoundsWidth;
        const heightResolution = geoBoundsHeight / pixelBoundsHeight;
        const r = Math.max(widthResolution, heightResolution);
        const scale = r / (resolution / pixelRatio);

        const center = toLonLat(getCenter(extent), projection);
        d3Projection.scale(scale).center([center[0], center[1]])
          .translate([canvasWidth / 2, canvasHeight / 2]);
        d3Path = d3Path.projection(d3Projection).context(context);
        d3Path(features);
        context.stroke();

        return canvas.node();
      };

      const layer = new ImageLayer({
        source: new ImageCanvasSource({
          canvasFunction: renderCanvas,
          projection: 'EPSG:3857'
        })
      });
      this.map.addLayer(layer);
    });
  }
}
