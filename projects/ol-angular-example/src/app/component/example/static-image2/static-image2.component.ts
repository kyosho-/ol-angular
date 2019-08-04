import { Component, OnInit, OnDestroy, ComponentFactory, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import { getCenter } from 'ol/extent';
import ImageLayer from 'ol/layer/Image';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import { MapBrowserPointerEvent } from 'ol';
import { ObjectEvent } from 'ol/Object';
import { defaults as defaultControls } from 'ol/control';

import { CenterIconControlComponent } from '../custom-controls2/center-icon-control/center-icon-control.component';

@Component({
  selector: 'app-static-image2',
  templateUrl: './static-image2.component.html',
  styleUrls: ['./static-image2.component.css']
})
export class StaticImage2Component implements OnInit, OnDestroy {

  // Map views always need a projection.  Here we just want to map image
  // coordinates directly to map coordinates, so we create a projection that uses
  // the image extent in pixels.
  public static readonly extent = [0, 0, 1024, 968];
  // public static readonly extent = [0, -968, 1024, 0];
  // public static readonly extent = [0, 968, 1024, 0];
  public static readonly projection = new Projection({
    code: 'xkcd-image',
    units: 'pixels',
    extent: StaticImage2Component.extent,
    axisOrientation: 'esu'
  });

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
        new ImageLayer({
          source: new Static({
            // attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
            // url: 'https://imgs.xkcd.com/comics/online_communities.png',
            url: './assets/data/online_communities.png',
            projection: StaticImage2Component.projection,
            imageExtent: StaticImage2Component.extent
          })
        })
      ],
      target: 'map',
      view: new View({
        projection: StaticImage2Component.projection,
        center: getCenter(StaticImage2Component.extent),
        zoom: 2,
        maxZoom: 8
      })
    });

    this.map.on('singleclick', this.singleClick);
    this.map.getView().on('change:center', this.changeCenter);
  }

  ngOnDestroy() {
    this.map.un('singleclick', this.singleClick);
  }

  singleClick(event: MapBrowserPointerEvent) {
    console.log(event);
    const coordinate = event.coordinate;
    console.log([coordinate[0], StaticImage2Component.extent[3] - coordinate[1]]);
  }

  changeCenter(event: ObjectEvent) {
    // console.log(event);
    // console.log((event.target as View).getCenter());
    const coordinate = (event.target as View).getCenter();
    console.log([coordinate[0], StaticImage2Component.extent[3] - coordinate[1]]);
  }
}
