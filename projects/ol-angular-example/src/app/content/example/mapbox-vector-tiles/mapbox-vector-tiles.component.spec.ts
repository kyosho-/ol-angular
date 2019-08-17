import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxVectorTilesComponent } from './mapbox-vector-tiles.component';

describe('MapboxVectorTilesComponent', () => {
  let component: MapboxVectorTilesComponent;
  let fixture: ComponentFixture<MapboxVectorTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxVectorTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxVectorTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
