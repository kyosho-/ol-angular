import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { MainService } from '../../../main/main.service';

import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls } from 'ol/control';

import { ZoomControlComponent } from '../zoom-control/zoom-control.component';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {
  private map: Map;
  private factory: ComponentFactory<ZoomControlComponent>;

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
      ZoomControlComponent);

    const componentRef = this.viewContainerRef.createComponent(this.factory);

    this.map = new Map({
      controls: defaultControls({
        zoom: false
      }).extend([
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
        zoom: 2
      })
    });
  }
}
