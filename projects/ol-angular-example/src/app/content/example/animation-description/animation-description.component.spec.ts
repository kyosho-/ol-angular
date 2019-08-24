import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationDescriptionComponent } from './animation-description.component';

describe('AnimationDescriptionComponent', () => {
  let component: AnimationDescriptionComponent;
  let fixture: ComponentFixture<AnimationDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
