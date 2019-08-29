import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main/main.service';

import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer, Image as ImageLayer } from 'ol/layer';
import { OSM, ImageArcGISRest } from 'ol/source';

@Component({
  selector: 'app-arcgis-image',
  templateUrl: './arcgis-image.component.html',
  styleUrls: ['./arcgis-image.component.css']
})
export class ArcgisImageComponent implements OnInit {

  private static readonly URL =
    'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer';

  private map: Map;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    const layerArray = [
      new TileLayer({
        source: new OSM()
      }),
      new ImageLayer({
        source: new ImageArcGISRest({
          ratio: 1,
          params: {},
          url: ArcgisImageComponent.URL
        })
      })
    ];
    this.map = new Map({
      layers: layerArray,
      target: 'map',
      view: new View({
        center: [-10997148, 4569099],
        zoom: 4
      })
    });
  }

}
