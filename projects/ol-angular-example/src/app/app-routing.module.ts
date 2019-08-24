import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './content/introduction/introduction.component';
import { LicenseComponent } from './content/license/license.component';

import { AccessibleDescriptionComponent } from './content/example/accessible/description/accessible-description.component';
import { AnimationDescriptionComponent } from './content/example/animation-description/animation-description.component';
import { ArcgisTiledDescriptionComponent } from './content/example/arcgis-tiled-description/arcgis-tiled-description.component';
import { AttributionsDescriptionComponent } from './content/example/attributions-description/attributions-description.component';
import { CustomControlsDescriptionComponent } from './content/example/custom-controls-description/custom-controls-description.component';
import { D3DescriptionComponent } from './content/example/d3-description/d3-description.component';
import { IconNegativeDescriptionComponent } from './content/example/icon-negative-description/icon-negative-description.component';
import { MousePositonDescriptionComponent } from './content/example/mouse-positon-description/mouse-positon-description.component';
import { SimpleDescriptionComponent } from './content/example/simple-description/simple-description.component';
import { StaticImageDescriptionComponent } from './content/example/static-image-description/static-image-description.component';

import { ReticleComponent } from './content/ol-angular/reticle/reticle.component';
import { ZoomComponent } from './content/ol-angular/zoom/zoom.component';

const routes: Routes = [
  // contents
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  // ol examples
  { path: 'introduction', component: IntroductionComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'example/accessible', component: AccessibleDescriptionComponent },
  { path: 'example/animation', component: AnimationDescriptionComponent },
  { path: 'example/arcgis-tiled', component: ArcgisTiledDescriptionComponent },
  { path: 'example/attributions', component: AttributionsDescriptionComponent },
  { path: 'example/custom-controls', component: CustomControlsDescriptionComponent },
  { path: 'example/d3', component: D3DescriptionComponent },
  { path: 'example/icon-negative', component: IconNegativeDescriptionComponent },
  { path: 'example/mouse-position', component: MousePositonDescriptionComponent },
  { path: 'example/simple', component: SimpleDescriptionComponent },
  { path: 'example/static-image', component: StaticImageDescriptionComponent },
  // ol-angular examples
  { path: 'ol-angular/reticle', component: ReticleComponent },
  { path: 'ol-angular/zoom', component: ZoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
