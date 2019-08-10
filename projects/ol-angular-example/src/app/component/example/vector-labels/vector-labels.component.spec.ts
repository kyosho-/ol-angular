import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorLabelsComponent } from './vector-labels.component';

describe('VectorLabelsComponent', () => {
  let component: VectorLabelsComponent;
  let fixture: ComponentFixture<VectorLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
