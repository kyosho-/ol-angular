import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeojsonVtComponent } from './geojson-vt.component';

describe('GeojsonVtComponent', () => {
  let component: GeojsonVtComponent;
  let fixture: ComponentFixture<GeojsonVtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeojsonVtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeojsonVtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
