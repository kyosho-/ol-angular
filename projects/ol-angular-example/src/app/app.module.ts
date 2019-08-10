import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { ExampleInMemoryDataService } from './common/example-in-memory-data.service';

import { AppComponent } from './app.component';
import { NavigationMainComponent } from './component/navigation/navigation-main/navigation-main.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { ExampleModule } from './component/example/example.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMainComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ExampleInMemoryDataService, { dataEncapsulation: false }
    ),
    ExampleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
