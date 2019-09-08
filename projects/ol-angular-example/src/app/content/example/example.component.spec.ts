import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRouteStub } from '../../testing/activated-route-stub.spec';
import { Location } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'css', func: css },
    { name: 'xml', func: xml }
  ];
}

describe('ExampleComponent', () => {
  let activatedRoute: ActivatedRouteStub;
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const locationSpy = jasmine.createSpyObj('Location', ['prepareExternalUrl']);
    activatedRoute = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        HighlightModule,
        MatIconModule,
        MatTabsModule,
        HighlightModule.forRoot({
          languages: hljsLanguages
        })
      ],
      declarations: [ExampleComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        },
        { provide: Router, useValue: routerSpy },
        {
          provide: Location,
          useValue: locationSpy
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
