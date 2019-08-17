import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import { easeIn, easeOut } from 'ol/easing';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import { MainService } from '../../../main/main.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  private static readonly london = fromLonLat([-0.12755, 51.507222]);
  private static readonly moscow = fromLonLat([37.6178, 55.7517]);
  private static readonly istanbul = fromLonLat([28.9744, 41.0128]);
  private static readonly rome = fromLonLat([12.5, 41.9]);
  private static readonly bern = fromLonLat([7.4458, 46.95]);

  private map: Map;
  private view: View;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Handle opened and closed event of navigation side bar.
    this.mainService.navigationChanged$.subscribe(
      (opened: boolean) => {
        // Resize map.
        this.map.updateSize();
      }
    );

    this.view = new View({
      center: AnimationComponent.istanbul,
      zoom: 6
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          preload: 4,
          source: new OSM()
        })
      ],
      // Improve user experience by loading tiles while animating. Will make
      // animations stutter on mobile or slow devices.
      loadTilesWhileAnimating: true,
      view: this.view
    });
  }

  // A bounce easing method (from https://github.com/DmitryBaranovskiy/raphael).
  bounce(t) {
    const s = 7.5625;
    const p = 2.75;
    let l: number;
    if (t < (1 / p)) {
      l = s * t * t;
    } else {
      if (t < (2 / p)) {
        t -= (1.5 / p);
        l = s * t * t + 0.75;
      } else {
        if (t < (2.5 / p)) {
          t -= (2.25 / p);
          l = s * t * t + 0.9375;
        } else {
          t -= (2.625 / p);
          l = s * t * t + 0.984375;
        }
      }
    }
    return l;
  }

  // An elastic easing method (from https://github.com/DmitryBaranovskiy/raphael).
  elastic(t) {
    return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
  }

  rotateLeft() {
    this.view.animate({
      rotation: this.view.getRotation() + Math.PI / 2
    });
  }

  rotateRight() {
    this.view.animate({
      rotation: this.view.getRotation() - Math.PI / 2
    });
  }

  panToLondon() {
    this.view.animate({
      center: AnimationComponent.london,
      duration: 2000
    });
  }

  elasticToMoscow() {
    this.view.animate({
      center: AnimationComponent.moscow,
      duration: 2000,
      easing: this.elastic
    });
  }

  bounceToIstanbul() {
    this.view.animate({
      center: AnimationComponent.istanbul,
      duration: 2000,
      easing: this.bounce
    });
  }

  spinToRome() {
    // Rotation animation takes the shortest arc, so animate in two parts
    const center = this.view.getCenter();
    this.view.animate({
      center: [
        center[0] + (AnimationComponent.rome[0] - center[0]) / 2,
        center[1] + (AnimationComponent.rome[1] - center[1]) / 2
      ],
      rotation: Math.PI,
      easing: easeIn
    }, {
        center: AnimationComponent.rome,
        rotation: 2 * Math.PI,
        easing: easeOut
      });
  }

  flyTo(location, done) {
    const durationValue = 2000;
    const zoomValue = this.view.getZoom();
    let parts = 2;
    let called = false;
    function callback(complete) {
      --parts;
      if (called) {
        return;
      }
      if (parts === 0 || !complete) {
        called = true;
        done(complete);
      }
    }
    this.view.animate({
      center: location,
      duration: durationValue
    }, callback);
    this.view.animate({
      zoom: zoomValue - 1,
      duration: durationValue / 2
    }, {
        zoom: zoomValue,
        duration: durationValue / 2
      }, callback);
  }

  flyToBern() {
    this.flyTo(AnimationComponent.bern, () => { });
  }

  rotateAroundRome() {
    // Rotation animation takes the shortest arc, so animate in two parts
    const rotation = this.view.getRotation();
    this.view.animate({
      rotation: rotation + Math.PI,
      anchor: AnimationComponent.rome,
      easing: easeIn
    }, {
        rotation: rotation + 2 * Math.PI,
        anchor: AnimationComponent.rome,
        easing: easeOut
      });
  }

  tour() {
    const locations = [
      AnimationComponent.london,
      AnimationComponent.bern,
      AnimationComponent.rome,
      AnimationComponent.moscow,
      AnimationComponent.istanbul];
    let index = -1;
    const next = (more) => {
      if (more) {
        ++index;
        if (index < locations.length) {
          const delay = index === 0 ? 0 : 750;
          setTimeout(() => {
            this.flyTo(locations[index], next);
          }, delay);
        } else {
          alert('Tour complete');
        }
      } else {
        alert('Tour cancelled');
      }
    };
    next(true);
  }
}
