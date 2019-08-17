import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAnimationComponent } from './feature-animation.component';

describe('FeatureAnimationComponent', () => {
  let component: FeatureAnimationComponent;
  let fixture: ComponentFixture<FeatureAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
