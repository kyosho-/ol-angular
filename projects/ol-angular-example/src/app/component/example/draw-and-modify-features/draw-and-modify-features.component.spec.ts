import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawAndModifyFeaturesComponent } from './draw-and-modify-features.component';

describe('DrawAndModifyFeaturesComponent', () => {
  let component: DrawAndModifyFeaturesComponent;
  let fixture: ComponentFixture<DrawAndModifyFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawAndModifyFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawAndModifyFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
