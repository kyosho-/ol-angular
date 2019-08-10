import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadedReliefComponent } from './shaded-relief.component';

describe('ShadedReliefComponent', () => {
  let component: ShadedReliefComponent;
  let fixture: ComponentFixture<ShadedReliefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadedReliefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadedReliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
