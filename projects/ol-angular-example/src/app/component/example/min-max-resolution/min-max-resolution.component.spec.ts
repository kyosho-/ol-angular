import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxResolutionComponent } from './min-max-resolution.component';

describe('MinMaxResolutionComponent', () => {
  let component: MinMaxResolutionComponent;
  let fixture: ComponentFixture<MinMaxResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinMaxResolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
