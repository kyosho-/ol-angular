import { Component, OnInit, ElementRef } from '@angular/core';

import { Control } from 'ol/control';

@Component({
  selector: 'app-reticle-control',
  templateUrl: './reticle-control.component.html',
  styleUrls: ['./reticle-control.component.css']
})
export class ReticleControlComponent extends Control implements OnInit {

  constructor(el: ElementRef) {
    super({
      element: el.nativeElement
    });
  }

  ngOnInit() {
  }

}
