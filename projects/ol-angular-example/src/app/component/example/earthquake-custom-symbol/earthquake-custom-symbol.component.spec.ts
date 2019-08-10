import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeCustomSymbolComponent } from './earthquake-custom-symbol.component';

describe('EarthquakeCustomSymbolComponent', () => {
  let component: EarthquakeCustomSymbolComponent;
  let fixture: ComponentFixture<EarthquakeCustomSymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeCustomSymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeCustomSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
