import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprojectionWgs84Component } from './reprojection-wgs84.component';

describe('ReprojectionWgs84Component', () => {
  let component: ReprojectionWgs84Component;
  let fixture: ComponentFixture<ReprojectionWgs84Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprojectionWgs84Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprojectionWgs84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
