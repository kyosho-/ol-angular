import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighlightModule } from 'ngx-highlightjs';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';

import { ExampleModule } from './content/example/example.module';
import { OlAngularModule } from './content/ol-angular/ol-angular.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { IntroductionComponent } from './content/introduction/introduction.component';
import { LicenseComponent } from './content/license/license.component';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'css', func: css },
    { name: 'xml', func: xml }
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    IntroductionComponent,
    LicenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    ExampleModule,
    OlAngularModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
