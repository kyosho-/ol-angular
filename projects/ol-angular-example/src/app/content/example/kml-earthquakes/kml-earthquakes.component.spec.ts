import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmlEarthquakesComponent } from './kml-earthquakes.component';

describe('KmlEarthquakesComponent', () => {
  let component: KmlEarthquakesComponent;
  let fixture: ComponentFixture<KmlEarthquakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmlEarthquakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmlEarthquakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
