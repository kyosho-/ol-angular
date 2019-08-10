import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerSwipeComponent } from './layer-swipe.component';

describe('LayerSwipeComponent', () => {
  let component: LayerSwipeComponent;
  let fixture: ComponentFixture<LayerSwipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerSwipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
