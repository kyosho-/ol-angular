import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../main/main.service';

import { fromEvent } from 'rxjs';

import Map from 'ol/Map';
import View from 'ol/View';
import { defaults as defaultControls, Attribution } from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-attributions',
  templateUrl: './attributions.component.html',
  styleUrls: ['./attributions.component.css']
})
export class AttributionsComponent implements OnInit {

  private map: Map;
  private attribution: Attribution;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    this.attribution = new Attribution({
      collapsible: false
    });
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      controls: defaultControls({ attribution: false })
        .extend([this.attribution]),
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });

    fromEvent(window, 'resize').subscribe(
      () => this.checkSize());
    this.checkSize();
  }

  checkSize() {
    const small = this.map.getSize()[0] < 600;
    this.attribution.setCollapsible(small);
    this.attribution.setCollapsed(small);
  }
}
