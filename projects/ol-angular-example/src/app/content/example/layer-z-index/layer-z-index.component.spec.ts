import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerZIndexComponent } from './layer-z-index.component';

describe('LayerZIndexComponent', () => {
  let component: LayerZIndexComponent;
  let fixture: ComponentFixture<LayerZIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerZIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerZIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
