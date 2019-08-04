import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AnimationComponent } from './component/example/animation/animation.component';
import { ArcgisTiledComponent } from './component/example/arcgis-tiled/arcgis-tiled.component';
import { CustomControlsComponent } from './component/example/custom-controls/custom-controls.component';
import { CustomControls2Component } from './component/example/custom-controls2/custom-controls2.component';
import { MousePositionComponent } from './component/example/mouse-position/mouse-position.component';
import { SimpleComponent } from './component/example/simple/simple.component';
import { StaticImageComponent } from './component/example/static-image/static-image.component';
import { StaticImage2Component } from './component/example/static-image2/static-image2.component';
import { D3Component } from './component/example/d3/d3.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'example/animation', component: AnimationComponent },
  { path: 'example/arcgis-tiled', component: ArcgisTiledComponent },
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
