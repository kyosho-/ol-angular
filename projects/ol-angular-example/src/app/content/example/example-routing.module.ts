import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessibleComponent } from './accessible/accessible.component';
import { AnimationComponent } from './animation/animation.component';
import { ArcgisTiledComponent } from './arcgis-tiled/arcgis-tiled.component';
import { AttributionsComponent } from './attributions/attributions.component';
import { CustomControlsComponent } from './custom-controls/custom-controls.component';
import { D3Component } from './d3/d3.component';
import { IconNegativeComponent } from './icon-negative/icon-negative.component';
import { MousePositionComponent } from './mouse-position/mouse-position.component';
import { SimpleComponent } from './simple/simple.component';
import { StaticImageComponent } from './static-image/static-image.component';
import { ArcgisImageComponent } from './arcgis-image/arcgis-image.component';
import { ExampleComponent } from './example.component';
import { BingMapsComponent } from './bing-maps/bing-maps.component';
import { BlendModesComponent } from './blend-modes/blend-modes.component';

const routes: Routes = [
  {
    path: ':id', component: ExampleComponent,
    children: [
      { path: '', redirectTo: '../', pathMatch: 'full' },
      // { path: '', redirectTo: '/example/accessible/accessible', pathMatch: 'full' },
      { path: 'accessible', component: AccessibleComponent },
      { path: 'animation', component: AnimationComponent },
      { path: 'arcgis-image', component: ArcgisImageComponent },
      { path: 'arcgis-tiled', component: ArcgisTiledComponent },
      { path: 'attributions', component: AttributionsComponent },
      { path: 'custom-controls', component: CustomControlsComponent },
      { path: 'bing-maps', component: BingMapsComponent },
      { path: 'blend-modes', component: BlendModesComponent },
      { path: 'd3', component: D3Component },
      { path: 'icon-negative', component: IconNegativeComponent },
      { path: 'mouse-position', component: MousePositionComponent },
      { path: 'simple', component: SimpleComponent },
      { path: 'static-image', component: StaticImageComponent },
      // {path: '**', component: NotImplementedComponent } // TODO:
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
