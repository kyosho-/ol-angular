import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';

import { GsiRoutingModule } from './gsi-routing.module';

import { GsiComponent } from './gsi.component';
import { StdComponent } from './std/std.component';


@NgModule({
  declarations: [
    GsiComponent,
    StdComponent],
  imports: [
    CommonModule,
    GsiRoutingModule,
    HighlightModule,
  ]
})
export class GsiModule { }
