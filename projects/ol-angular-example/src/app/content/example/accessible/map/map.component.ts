import { Component, OnInit } from '@angular/core';

import { CommonMapComponent } from '../../common-map-component';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements CommonMapComponent, OnInit {

  private map: Map;

  constructor() { }

  updateSize() {
    this.map.updateSize();
  }

  ngOnInit() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

  zoomIn(event: MouseEvent) {
    const view = this.map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom + 1);
  }

  zoomOut(event: MouseEvent) {
    const view = this.map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom - 1);
  }
}
