import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseComponent } from './license.component';
import { Location } from '@angular/common';

describe('LicenseComponent', () => {
  let component: LicenseComponent;
  let fixture: ComponentFixture<LicenseComponent>;

  beforeEach(async(() => {
    const locationSpy = jasmine.createSpyObj('Location', ['prepareExternalUrl']);

    TestBed.configureTestingModule({
      imports: [
        // HttpClientModule
        HttpClientTestingModule
      ],
      declarations: [LicenseComponent],
      providers: [
        {
          provide: Location,
          useValue: locationSpy
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
