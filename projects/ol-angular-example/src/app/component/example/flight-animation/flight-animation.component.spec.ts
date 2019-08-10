import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAnimationComponent } from './flight-animation.component';

describe('FlightAnimationComponent', () => {
  let component: FlightAnimationComponent;
  let fixture: ComponentFixture<FlightAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
