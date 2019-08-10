import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitToleranceComponent } from './hit-tolerance.component';

describe('HitToleranceComponent', () => {
  let component: HitToleranceComponent;
  let fixture: ComponentFixture<HitToleranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitToleranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitToleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
