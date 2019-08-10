import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationOrientationComponent } from './geolocation-orientation.component';

describe('GeolocationOrientationComponent', () => {
  let component: GeolocationOrientationComponent;
  let fixture: ComponentFixture<GeolocationOrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationOrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
