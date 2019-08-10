import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XyzEsri4326x512Component } from './xyz-esri4326x512.component';

describe('XyzEsri4326x512Component', () => {
  let component: XyzEsri4326x512Component;
  let fixture: ComponentFixture<XyzEsri4326x512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XyzEsri4326x512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XyzEsri4326x512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
