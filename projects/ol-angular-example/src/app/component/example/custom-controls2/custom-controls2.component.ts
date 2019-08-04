import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentFactory, HostListener } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import { defaults as defaultControls } from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { CenterIconControlComponent } from './center-icon-control/center-icon-control.component';

@Component({
  selector: 'app-custom-controls2',
  templateUrl: './custom-controls2.component.html',
  styleUrls: ['./custom-controls2.component.css']
})
export class CustomControls2Component implements OnInit {

  private map: Map;

  private factory: ComponentFactory<CenterIconControlComponent>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.factory = this.componentFactoryResolver.resolveComponentFactory(
      CenterIconControlComponent);

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
