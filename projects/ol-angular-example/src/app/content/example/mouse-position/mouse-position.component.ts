import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main/main.service';

import Map from 'ol/Map';
import View from 'ol/View';
import { defaults as defaultControls } from 'ol/control';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-mouse-position',
  templateUrl: './mouse-position.component.html',
  styleUrls: ['./mouse-position.component.css']
})
export class MousePositionComponent implements OnInit {

  private map: Map;

  private mousePositionControl: MousePosition;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    this.mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });

    this.map = new Map({
      controls: defaultControls().extend([
        this.mousePositionControl]),
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

  changeProjection(event: Event) {
    this.mousePositionControl.setProjection(
      (event.target as HTMLSelectElement).value);
  }

  changePrecision(event: Event) {
    const format = createStringXY(
      (event.target as HTMLInputElement).valueAsNumber);
    this.mousePositionControl.setCoordinateFormat(format);
  }
}
