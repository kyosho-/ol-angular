import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReticleComponent } from './reticle/reticle.component';
import { ReticleControlComponent } from './reticle-control/reticle-control.component';
import { ZoomComponent } from './zoom/zoom.component';
import { ZoomControlComponent } from './zoom-control/zoom-control.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ReticleComponent,
    ReticleControlComponent,
    ZoomComponent,
    ZoomControlComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  entryComponents: [
    ReticleControlComponent,
    ZoomControlComponent
  ]
})
export class OlAngularModule { }
