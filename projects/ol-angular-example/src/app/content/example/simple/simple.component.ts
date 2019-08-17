import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { MainService } from '../../../main/main.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  private map: Map;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        // Resize map.
        this.map.updateSize();
      }
    );

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

}
