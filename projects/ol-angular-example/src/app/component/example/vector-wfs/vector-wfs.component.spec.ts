import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorWfsComponent } from './vector-wfs.component';

describe('VectorWfsComponent', () => {
  let component: VectorWfsComponent;
  let fixture: ComponentFixture<VectorWfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorWfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorWfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
