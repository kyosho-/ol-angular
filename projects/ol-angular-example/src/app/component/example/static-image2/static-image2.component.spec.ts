import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticImage2Component } from './static-image2.component';

describe('StaticImage2Component', () => {
  let component: StaticImage2Component;
  let fixture: ComponentFixture<StaticImage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticImage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticImage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
