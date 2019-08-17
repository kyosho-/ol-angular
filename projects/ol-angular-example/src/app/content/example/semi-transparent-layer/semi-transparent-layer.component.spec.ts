import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiTransparentLayerComponent } from './semi-transparent-layer.component';

describe('SemiTransparentLayerComponent', () => {
  let component: SemiTransparentLayerComponent;
  let fixture: ComponentFixture<SemiTransparentLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiTransparentLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiTransparentLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
