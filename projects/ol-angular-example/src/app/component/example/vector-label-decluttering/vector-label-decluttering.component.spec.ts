import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorLabelDeclutteringComponent } from './vector-label-decluttering.component';

describe('VectorLabelDeclutteringComponent', () => {
  let component: VectorLabelDeclutteringComponent;
  let fixture: ComponentFixture<VectorLabelDeclutteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorLabelDeclutteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorLabelDeclutteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
