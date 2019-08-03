import { Component, OnInit, ElementRef } from '@angular/core';

import { Control } from 'ol/control';

@Component({
  selector: 'app-rotate-north-control',
  templateUrl: './rotate-north-control.component.html',
  styleUrls: ['./rotate-north-control.component.css']
})
export class RotateNorthControlComponent extends Control implements OnInit {

  constructor(el: ElementRef) {
    super({
      element: el.nativeElement
    });
  }

  ngOnInit() {
  }

  handleRotateNorth(event: Event) {
    this.getMap().getView().setRotation(0);
  }
}
