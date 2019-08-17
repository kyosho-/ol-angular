import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentFactory, HostListener } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import { defaults as defaultControls } from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { RotateNorthControlComponent } from './rotate-north-control/rotate-north-control.component';
import { MainService } from '../../../main/main.service';

@Component({
  selector: 'app-custom-controls',
  templateUrl: './custom-controls.component.html',
  styleUrls: ['./custom-controls.component.css']
})
export class CustomControlsComponent implements OnInit {

  private map: Map;

  private factory: ComponentFactory<RotateNorthControlComponent>;

  constructor(
    private mainService: MainService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        // Resize map.
        this.map.updateSize();
      }
    );

    this.factory = this.componentFactoryResolver.resolveComponentFactory(
      RotateNorthControlComponent);

    const componentRef = this.viewContainerRef.createComponent(this.factory);

    this.map = new Map({
      controls: defaultControls().extend([
        componentRef.instance
      ]),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 3,
        rotation: 1
      })
    });
  }
}
