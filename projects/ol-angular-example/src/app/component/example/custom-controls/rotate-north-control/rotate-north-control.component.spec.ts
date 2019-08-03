import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateNorthControlComponent } from './rotate-north-control.component';

describe('RotateNorthControlComponent', () => {
  let component: RotateNorthControlComponent;
  let fixture: ComponentFixture<RotateNorthControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateNorthControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateNorthControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
