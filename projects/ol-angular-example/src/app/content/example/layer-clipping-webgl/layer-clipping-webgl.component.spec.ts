import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerClippingWebglComponent } from './layer-clipping-webgl.component';

describe('LayerClippingWebglComponent', () => {
  let component: LayerClippingWebglComponent;
  let fixture: ComponentFixture<LayerClippingWebglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerClippingWebglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerClippingWebglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
