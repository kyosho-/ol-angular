import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './content/introduction/introduction.component';
import { AnimationComponent } from './content/example/animation/animation.component';
import { ArcgisTiledComponent } from './content/example/arcgis-tiled/arcgis-tiled.component';
import { CustomControlsComponent } from './content/example/custom-controls/custom-controls.component';
import { MousePositionComponent } from './content/example/mouse-position/mouse-position.component';
import { SimpleComponent } from './content/example/simple/simple.component';
import { StaticImageComponent } from './content/example/static-image/static-image.component';
import { D3Component } from './content/example/d3/d3.component';
import { AttributionsComponent } from './content/example/attributions/attributions.component';
import { LicenseComponent } from './content/license/license.component';
import { AccessibleComponent } from './content/example/accessible/accessible.component';
import { ReticleComponent } from './content/ol-angular/reticle/reticle.component';
import { ZoomComponent } from './content/ol-angular/zoom/zoom.component';
import { IconNegativeComponent } from './content/example/icon-negative/icon-negative.component';

const routes: Routes = [
  // contents
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  // ol examples
  { path: 'introduction', component: IntroductionComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'example/accessible', component: AccessibleComponent },
  { path: 'example/animation', component: AnimationComponent },
  { path: 'example/arcgis-tiled', component: ArcgisTiledComponent },
  { path: 'example/attributions', component: AttributionsComponent },
  { path: 'example/custom-controls', component: CustomControlsComponent },
  { path: 'example/d3', component: D3Component },
  { path: 'example/icon-negative', component: IconNegativeComponent },
  { path: 'example/mouse-position', component: MousePositionComponent },
  { path: 'example/simple', component: SimpleComponent },
  { path: 'example/static-image', component: StaticImageComponent },
  // ol-angular examples
  { path: 'ol-angular/reticle', component: ReticleComponent },
  { path: 'ol-angular/zoom', component: ZoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
