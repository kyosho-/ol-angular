import { Component, OnInit, ElementRef } from '@angular/core';
import { Control } from 'ol/control';
import { easeOut } from 'ol/easing';

@Component({
  selector: 'app-zoom-control',
  templateUrl: './zoom-control.component.html',
  styleUrls: ['./zoom-control.component.css']
})
export class ZoomControlComponent extends Control implements OnInit {

  duration: number;

  constructor(el: ElementRef) {
    super({
      element: el.nativeElement
    });
  }

  ngOnInit() {
    this.duration = 250;
  }

  zoomByDelta(delta: number) {
    const map = this.getMap();
    const view = map.getView();
    if (!view) {
      // the map does not have a view, so we can't act
      // upon it
      return;
    }
    const currentResolution = view.getResolution();
    if (currentResolution) {
      const newResolution = view.constrainResolution(currentResolution, delta);
      if (this.duration > 0) {
        if (view.getAnimating()) {
          view.cancelAnimations();
        }
        view.animate({
          resolution: newResolution,
          duration: this.duration,
          easing: easeOut
        });
      } else {
        view.setResolution(newResolution);
      }
    }
  }
}
