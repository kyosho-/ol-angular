import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerClippingComponent } from './layer-clipping.component';

describe('LayerClippingComponent', () => {
  let component: LayerClippingComponent;
  let fixture: ComponentFixture<LayerClippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerClippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerClippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
