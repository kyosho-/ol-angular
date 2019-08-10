import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraticuleComponent } from './graticule.component';

describe('GraticuleComponent', () => {
  let component: GraticuleComponent;
  let fixture: ComponentFixture<GraticuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraticuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraticuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
