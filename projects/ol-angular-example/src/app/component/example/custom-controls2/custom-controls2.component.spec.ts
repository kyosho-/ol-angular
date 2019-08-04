import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomControls2Component } from './custom-controls2.component';

describe('CustomControls2Component', () => {
  let component: CustomControls2Component;
  let fixture: ComponentFixture<CustomControls2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomControls2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomControls2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
