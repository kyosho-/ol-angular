import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps';
import { MainService } from '../../../main/main.service';

@Component({
  selector: 'app-bing-maps',
  templateUrl: './bing-maps.component.html',
  styleUrls: ['./bing-maps.component.css']
})
export class BingMapsComponent implements OnInit {

  private map: Map;
  private styles: string[];
  private layers: TileLayer[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    this.styles = [
      'Road',
      'RoadOnDemand',
      'Aerial',
      'AerialWithLabels',
      'collinsBart',
      'ordnanceSurvey'
    ];
    this.layers = [];
    let i: number;
    let ii: number;
    for (i = 0, ii = this.styles.length; i < ii; ++i) {
      this.layers.push(new TileLayer({
        visible: false,
        preload: Infinity,
        source: new BingMaps({
          key: 'Your Bing Maps Key from http://www.bingmapsportal.com/ here',
          imagerySet: this.styles[i]
          // use maxZoom 19 to see stretched tiles instead of the BingMaps
          // "no photos at this zoom level" tiles
          // maxZoom: 19
        })
      }));
    }
    this.map = new Map({
      layers: this.layers,
      // Improve user experience by loading tiles while dragging/zooming. Will make
      // zooming choppy on mobile or slow devices.
      loadTilesWhileInteracting: true,
      target: 'map',
      view: new View({
        center: [-6655.5402445057125, 6709968.258934638],
        zoom: 13
      })
    });
  }

  onChange(event: Event) {
    console.log(event);
    const style = (event.target as HTMLSelectElement).value;
    for (let i = 0, ii = this.layers.length; i < ii; ++i) {
      this.layers[i].setVisible(this.styles[i] === style);
    }
  }
}
