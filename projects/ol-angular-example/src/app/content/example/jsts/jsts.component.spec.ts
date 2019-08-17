import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JstsComponent } from './jsts.component';

describe('JstsComponent', () => {
  let component: JstsComponent;
  let fixture: ComponentFixture<JstsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JstsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JstsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
