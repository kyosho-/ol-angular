import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderGeometryComponent } from './render-geometry.component';

describe('RenderGeometryComponent', () => {
  let component: RenderGeometryComponent;
  let fixture: ComponentFixture<RenderGeometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderGeometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
