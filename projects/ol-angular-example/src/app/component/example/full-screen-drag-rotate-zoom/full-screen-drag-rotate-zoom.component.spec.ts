import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenDragRotateZoomComponent } from './full-screen-drag-rotate-zoom.component';

describe('FullScreenDragRotateZoomComponent', () => {
  let component: FullScreenDragRotateZoomComponent;
  let fixture: ComponentFixture<FullScreenDragRotateZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenDragRotateZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenDragRotateZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
