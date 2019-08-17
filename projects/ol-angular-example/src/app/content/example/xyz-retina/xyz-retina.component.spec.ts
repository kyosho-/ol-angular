import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XyzRetinaComponent } from './xyz-retina.component';

describe('XyzRetinaComponent', () => {
  let component: XyzRetinaComponent;
  let fixture: ComponentFixture<XyzRetinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XyzRetinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XyzRetinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
