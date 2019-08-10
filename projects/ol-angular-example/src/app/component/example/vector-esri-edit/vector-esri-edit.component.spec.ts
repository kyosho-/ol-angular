import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorEsriEditComponent } from './vector-esri-edit.component';

describe('VectorEsriEditComponent', () => {
  let component: VectorEsriEditComponent;
  let fixture: ComponentFixture<VectorEsriEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorEsriEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorEsriEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
