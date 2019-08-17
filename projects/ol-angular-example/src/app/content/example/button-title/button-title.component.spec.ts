import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTitleComponent } from './button-title.component';

describe('ButtonTitleComponent', () => {
  let component: ButtonTitleComponent;
  let fixture: ComponentFixture<ButtonTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
