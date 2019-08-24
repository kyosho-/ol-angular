import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { AccessibleDescriptionComponent } from './description/accessible-description.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AccessibleDescriptionComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class AccessibleDescriptionModule { }
