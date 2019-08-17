import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxVectorTilesAdvancedComponent } from './mapbox-vector-tiles-advanced.component';

describe('MapboxVectorTilesAdvancedComponent', () => {
  let component: MapboxVectorTilesAdvancedComponent;
  let fixture: ComponentFixture<MapboxVectorTilesAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxVectorTilesAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxVectorTilesAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
