import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MousePositonDescriptionComponent } from './mouse-positon-description.component';

describe('MousePositonDescriptionComponent', () => {
  let component: MousePositonDescriptionComponent;
  let fixture: ComponentFixture<MousePositonDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MousePositonDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MousePositonDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
