import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsiComponent } from './gsi.component';
import { StdComponent } from './std/std.component';


const routes: Routes = [
  {
    path: ':id', component: GsiComponent,
    children: [
      { path: '', redirectTo: '../', pathMatch: 'full' },
      { path: 'std', component: StdComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GsiRoutingModule { }
