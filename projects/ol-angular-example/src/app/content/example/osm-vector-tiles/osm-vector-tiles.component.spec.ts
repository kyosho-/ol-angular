import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmVectorTilesComponent } from './osm-vector-tiles.component';

describe('OsmVectorTilesComponent', () => {
  let component: OsmVectorTilesComponent;
  let fixture: ComponentFixture<OsmVectorTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsmVectorTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsmVectorTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
