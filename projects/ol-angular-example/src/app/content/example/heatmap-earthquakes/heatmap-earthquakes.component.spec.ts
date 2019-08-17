import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapEarthquakesComponent } from './heatmap-earthquakes.component';

describe('HeatmapEarthquakesComponent', () => {
  let component: HeatmapEarthquakesComponent;
  let fixture: ComponentFixture<HeatmapEarthquakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapEarthquakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapEarthquakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
