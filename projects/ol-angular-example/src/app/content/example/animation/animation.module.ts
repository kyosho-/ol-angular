import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { DescriptionComponent } from './description/description.component';
import { AnimationComponent } from './animation.component';



@NgModule({
  declarations: [
    DescriptionComponent,
    MapComponent,
    AnimationComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AnimationModule { }
