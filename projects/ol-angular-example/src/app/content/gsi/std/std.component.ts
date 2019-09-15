import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main/main.service';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { defaults as defaultControls, Attribution } from 'ol/control';
import { transform } from 'ol/proj';

@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.css']
})
export class StdComponent implements OnInit {

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
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            attributions: [
              '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
            ],
            url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
            projection: 'EPSG:3857'
          })
        })
      ],
      controls: defaultControls({ attribution: false })
        .extend([new Attribution({ collapsible: false })]),
      view: new View({
        projection: 'EPSG:3857',
        center: transform([138.7313889, 35.3622222], 'EPSG:4326', 'EPSG:3857'),
        maxZoom: 18,
        zoom: 5
      })
    });
  }
}
