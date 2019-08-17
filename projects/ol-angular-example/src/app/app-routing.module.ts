import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './content/introduction/introduction.component';
import { AnimationComponent } from './content/example/animation/animation.component';
import { ArcgisTiledComponent } from './content/example/arcgis-tiled/arcgis-tiled.component';
import { CustomControlsComponent } from './content/example/custom-controls/custom-controls.component';
import { CustomControls2Component } from './content/example/custom-controls2/custom-controls2.component';
import { MousePositionComponent } from './content/example/mouse-position/mouse-position.component';
import { SimpleComponent } from './content/example/simple/simple.component';
import { StaticImageComponent } from './content/example/static-image/static-image.component';
import { StaticImage2Component } from './content/example/static-image2/static-image2.component';
import { D3Component } from './content/example/d3/d3.component';
import { AttributionsComponent } from './content/example/attributions/attributions.component';
import { LicenseComponent } from './content/license/license.component';

const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'example/animation', component: AnimationComponent },
  { path: 'example/arcgis-tiled', component: ArcgisTiledComponent },
  { path: 'example/attributions', component: AttributionsComponent },
  { path: 'example/custom-controls', component: CustomControlsComponent },
  { path: 'example/custom-controls2', component: CustomControls2Component },
  { path: 'example/d3', component: D3Component },
  { path: 'example/mouse-position', component: MousePositionComponent },
  { path: 'example/simple', component: SimpleComponent },
  { path: 'example/static-image2', component: StaticImage2Component },
  { path: 'example/static-image', component: StaticImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
