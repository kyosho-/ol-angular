import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasGradientPatternComponent } from './canvas-gradient-pattern.component';

describe('CanvasGradientPatternComponent', () => {
  let component: CanvasGradientPatternComponent;
  let fixture: ComponentFixture<CanvasGradientPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasGradientPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasGradientPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
