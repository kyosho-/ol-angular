import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main/main.service';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM, TileArcGISRest } from 'ol/source';
import { Options as TileArcGISRestOptions } from 'ol/source/TileArcGISRest';

@Component({
  selector: 'app-arcgis-tiled',
  templateUrl: './arcgis-tiled.component.html',
  styleUrls: ['./arcgis-tiled.component.css']
})
export class ArcgisTiledComponent implements OnInit {

  private static readonly url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' +
    'Specialty/ESRI_StateCityHighway_USA/MapServer';

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
      new TileLayer({
        extent: [-13884991, 2870341, -7455066, 6338219],
        source: new TileArcGISRest({
          url: ArcgisTiledComponent.url
        } as TileArcGISRestOptions)
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
