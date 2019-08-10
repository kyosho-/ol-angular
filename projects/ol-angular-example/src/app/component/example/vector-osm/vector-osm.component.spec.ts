import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorOsmComponent } from './vector-osm.component';

describe('VectorOsmComponent', () => {
  let component: VectorOsmComponent;
  let fixture: ComponentFixture<VectorOsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorOsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorOsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
