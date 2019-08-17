import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragRotateAndZoomComponent } from './drag-rotate-and-zoom.component';

describe('DragRotateAndZoomComponent', () => {
  let component: DragRotateAndZoomComponent;
  let fixture: ComponentFixture<DragRotateAndZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragRotateAndZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragRotateAndZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
