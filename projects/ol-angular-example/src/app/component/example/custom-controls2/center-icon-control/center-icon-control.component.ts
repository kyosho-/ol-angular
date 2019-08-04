import { Component, OnInit, ElementRef } from '@angular/core';

import { Control } from 'ol/control';

@Component({
  selector: 'app-center-icon-control',
  templateUrl: './center-icon-control.component.html',
  styleUrls: ['./center-icon-control.component.css']
})
export class CenterIconControlComponent extends Control implements OnInit {

  constructor(el: ElementRef) {
    super({
      element: el.nativeElement
    });
  }

  ngOnInit() {
  }

}
