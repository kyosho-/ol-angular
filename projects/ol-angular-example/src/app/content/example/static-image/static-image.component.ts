import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main/main.service';

import Map from 'ol/Map';
import View from 'ol/View';
import { getCenter } from 'ol/extent';
import ImageLayer from 'ol/layer/Image';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';

@Component({
  selector: 'app-static-image',
  templateUrl: './static-image.component.html',
  styleUrls: ['./static-image.component.css']
})
export class StaticImageComponent implements OnInit {

  // Map views always need a projection.  Here we just want to map image
  // coordinates directly to map coordinates, so we create a projection that uses
  // the image extent in pixels.
  public static readonly extent = [0, 0, 1024, 968];
  public static readonly projection = new Projection({
    code: 'xkcd-image',
    units: 'pixels',
    extent: StaticImageComponent.extent
  });

  private map: Map;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    this.map = new Map({
      layers: [
        new ImageLayer({
          source: new Static({
            attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
            url: 'https://imgs.xkcd.com/comics/online_communities.png',
            projection: StaticImageComponent.projection,
            imageExtent: StaticImageComponent.extent
          })
        })
      ],
      target: 'map',
      view: new View({
        projection: StaticImageComponent.projection,
        center: getCenter(StaticImageComponent.extent),
        zoom: 2,
        maxZoom: 8
      })
    });
  }

}
