import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeClustersComponent } from './earthquake-clusters.component';

describe('EarthquakeClustersComponent', () => {
  let component: EarthquakeClustersComponent;
  let fixture: ComponentFixture<EarthquakeClustersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeClustersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeClustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
