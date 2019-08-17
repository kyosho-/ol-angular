import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVectorLayerComponent } from './image-vector-layer.component';

describe('ImageVectorLayerComponent', () => {
  let component: ImageVectorLayerComponent;
  let fixture: ComponentFixture<ImageVectorLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageVectorLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageVectorLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
