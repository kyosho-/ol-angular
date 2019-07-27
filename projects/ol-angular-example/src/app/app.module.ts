import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { ExampleInMemoryDataService } from './common/example-in-memory-data.service';

import { AnimationComponent } from './component/example/animation/animation.component';
import { ArcgisTiledComponent } from './component/example/arcgis-tiled/arcgis-tiled.component';
import { SimpleComponent } from './component/example/simple/simple.component';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { StaticImageComponent } from './component/example/static-image/static-image.component';
import { MousePositionComponent } from './component/example/mouse-position/mouse-position.component';
import { CustomControlsComponent } from './component/example/custom-controls/custom-controls.component';
import { StaticImage2Component } from './component/example/static-image2/static-image2.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    ArcgisTiledComponent,
    SimpleComponent,
    DashboardComponent,
    StaticImageComponent,
    MousePositionComponent,
    CustomControlsComponent,
    StaticImage2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ExampleInMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
