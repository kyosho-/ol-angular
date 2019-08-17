import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterIconControlComponent } from './center-icon-control.component';

describe('CenterIconControlComponent', () => {
  let component: CenterIconControlComponent;
  let fixture: ComponentFixture<CenterIconControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterIconControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterIconControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
