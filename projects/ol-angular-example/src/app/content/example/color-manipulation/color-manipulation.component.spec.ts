import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorManipulationComponent } from './color-manipulation.component';

describe('ColorManipulationComponent', () => {
  let component: ColorManipulationComponent;
  let fixture: ComponentFixture<ColorManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
