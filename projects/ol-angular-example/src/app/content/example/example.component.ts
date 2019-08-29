import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Content } from '../../common/content';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  htmlCode = `<a class="skiplink" href="#map">Go to map</a>
<div id="map" class="map"></div>
<button id="zoom-out" (click)="zoomOut($event)">Zoom out</button>
<button id="zoom-in" (click)="zoomIn($event)">Zoom in</button>`;

  cssCode = `.map {
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

  tsCode = `import { Component, OnInit } from '@angular/core';
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
}`;

  content$: Observable<Content>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exampleService: ExampleService) { }

  ngOnInit() {
    // Get example info.
    this.content$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.exampleService.getExample(params.get('id'))),
      tap((content: Content) => {
        // this.router.navigate([{ outlets: { example: content.id } }]);
      }),
      tap((content: Content) => {
        console.log(content);
      }));
  }

  openLink(event: any) {
    this.content$.subscribe((content: Content) =>
      window.open(`${content.url}${content.fileName}`, 'ol'));
  }
}
