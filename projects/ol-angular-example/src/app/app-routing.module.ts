import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './content/introduction/introduction.component';
import { LicenseComponent } from './content/license/license.component';

import { ReticleComponent } from './content/ol-angular/reticle/reticle.component';
import { ZoomComponent } from './content/ol-angular/zoom/zoom.component';

const routes: Routes = [
  // contents
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  // { path: '', redirectTo: '/example/accessible/accessible', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'license', component: LicenseComponent },
  // ol examples
  { path: 'example', loadChildren: './content/example/example.module#ExampleModule' },
  // ol-angular examples
  { path: 'ol-angular/reticle', component: ReticleComponent },
  { path: 'ol-angular/zoom', component: ZoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
