import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../main/main.service';

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import Select from 'ol/interaction/Select';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';

@Component({
  selector: 'app-icon-negative',
  templateUrl: './icon-negative.component.html',
  styleUrls: ['./icon-negative.component.css']
})
export class IconNegativeComponent implements OnInit {

  map: Map;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        this.map.updateSize();
      }
    );

    const iconFeature = new Feature(new Point([0, 0]));
    iconFeature.set('style', this.createStyle('assets/example-data/icon.png', undefined));

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new Stamen({ layer: 'watercolor' })
        }),
        new VectorLayer({
          style: (feature: Feature) => {
            return feature.get('style');
          },
          source: new VectorSource({ features: [iconFeature] })
        })
      ],
      target: document.getElementById('map'),
      view: new View({
        center: [0, 0],
        zoom: 3
      })
    });

    const selectStyle = {};
    const select = new Select({
      style: (feature: Feature) => {
        const image = feature.get('style').getImage().getImage();
        if (!selectStyle[image.src]) {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, image.width, image.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          for (let i = 0, ii = data.length; i < ii; i = i + (i % 4 === 2 ? 2 : 1)) {
            data[i] = 255 - data[i];
          }
          context.putImageData(imageData, 0, 0);
          selectStyle[image.src] = this.createStyle(undefined, canvas);
        }
        return selectStyle[image.src];
      }
    });
    this.map.addInteraction(select);

    this.map.on('pointermove', (evt) => {
      this.map.getTargetElement().style.cursor =
        this.map.hasFeatureAtPixel(evt.pixel) ? 'pointer' : '';
    });
  }

  createStyle(url: string, ImageElement: HTMLImageElement | HTMLCanvasElement) {
    return new Style({
      image: new Icon({
        anchor: [0.5, 0.96],
        crossOrigin: 'anonymous',
        // src: src,
        // img: img,
        src: url,
        img: ImageElement,
        imgSize: ImageElement ? [ImageElement.width, ImageElement.height] : undefined
      })
    });
  }
}
