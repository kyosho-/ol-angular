import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

import { MainService } from '../../../main/main.service';
import { ExampleService } from '../example.service';
import { Example } from '../example';
import { MapComponent } from '../map-component';
import { MatButton } from '@angular/material/button';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-accessible-description',
  templateUrl: './accessible-description.component.html',
  styleUrls: ['./accessible-description.component.css']
})
export class AccessibleDescriptionComponent implements OnInit {

  public static readonly EXAMPLE_ID = 'accessible';

  htmlCode = `
<a class="skiplink" href="#map">Go to map</a>
<div id="map" class="map"></div>
<button id="zoom-out" (click)="zoomOut($event)">Zoom out</button>
<button id="zoom-in" (click)="zoomIn($event)">Zoom in</button>
`;

  cssCode = `
.map {
    height: 400px;
    width: 100%;
    margin-bottom: 10px;
}

a.skiplink {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
}

a.skiplink:focus {
    clip: auto;
    height: auto;
    width: auto;
    background-color: #fff;
    padding: 0.3em;
}

#map:focus {
    outline: #4A74A8 solid 0.15em;
}`;

  tsCode = `
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-accessible',
  templateUrl: './accessible.component.html',
  styleUrls: ['./accessible.component.css']
})
export class AccessibleComponent implements MapComponent, OnInit {

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
`;

  @ViewChild('component', { static: false })
  component: MapComponent;

  example$: Observable<Example>;

  constructor(
    private mainService: MainService,
    private exampleService: ExampleService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        // Resize map.
        this.component.updateSize();
      }
    );

    // Get example info.
    this.example$ = this.exampleService.getExample(
      AccessibleDescriptionComponent.EXAMPLE_ID).pipe(
        share()
      );
  }

  openLink(event: any) {
    this.example$.subscribe(
      (example: Example) => {
        console.log(`${example.url}${example.fileName}`);
        window.open(`${example.url}${example.fileName}`, 'ol');
      });
  }
}
