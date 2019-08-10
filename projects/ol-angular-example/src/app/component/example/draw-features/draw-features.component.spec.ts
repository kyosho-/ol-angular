import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawFeaturesComponent } from './draw-features.component';

describe('DrawFeaturesComponent', () => {
  let component: DrawFeaturesComponent;
  let fixture: ComponentFixture<DrawFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
