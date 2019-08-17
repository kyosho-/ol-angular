import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropImageVectorComponent } from './drag-and-drop-image-vector.component';

describe('DragAndDropImageVectorComponent', () => {
  let component: DragAndDropImageVectorComponent;
  let fixture: ComponentFixture<DragAndDropImageVectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropImageVectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropImageVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
