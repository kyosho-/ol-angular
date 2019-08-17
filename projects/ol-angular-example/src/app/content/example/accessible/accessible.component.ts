import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../main/main.service';
import { ExampleService } from '../example.service';
import { Example } from '../example';
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
export class AccessibleComponent implements OnInit {

  public static readonly EXAMPLE_ID = 'accessible';

  example: Observable<Example>;

  private map: Map;

  constructor(
    private mainService: MainService,
    private exampleService: ExampleService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        // Resize map.
        this.map.updateSize();
      }
    );

    // Get example info.
    this.example = this.exampleService.getExample(AccessibleComponent.EXAMPLE_ID);

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
