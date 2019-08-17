import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerSpyComponent } from './layer-spy.component';

describe('LayerSpyComponent', () => {
  let component: LayerSpyComponent;
  let fixture: ComponentFixture<LayerSpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerSpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerSpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
