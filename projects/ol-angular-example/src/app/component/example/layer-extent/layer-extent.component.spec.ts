import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerExtentComponent } from './layer-extent.component';

describe('LayerExtentComponent', () => {
  let component: LayerExtentComponent;
  let fixture: ComponentFixture<LayerExtentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerExtentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerExtentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
