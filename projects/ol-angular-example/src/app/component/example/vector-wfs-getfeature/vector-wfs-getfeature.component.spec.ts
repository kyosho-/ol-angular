import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorWfsGetfeatureComponent } from './vector-wfs-getfeature.component';

describe('VectorWfsGetfeatureComponent', () => {
  let component: VectorWfsGetfeatureComponent;
  let fixture: ComponentFixture<VectorWfsGetfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorWfsGetfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorWfsGetfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
