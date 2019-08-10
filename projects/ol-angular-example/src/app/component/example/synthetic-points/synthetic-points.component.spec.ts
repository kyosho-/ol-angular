import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheticPointsComponent } from './synthetic-points.component';

describe('SyntheticPointsComponent', () => {
  let component: SyntheticPointsComponent;
  let fixture: ComponentFixture<SyntheticPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheticPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheticPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
