import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorEsriComponent } from './vector-esri.component';

describe('VectorEsriComponent', () => {
  let component: VectorEsriComponent;
  let fixture: ComponentFixture<VectorEsriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorEsriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorEsriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
