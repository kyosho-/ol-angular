import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheticLinesComponent } from './synthetic-lines.component';

describe('SyntheticLinesComponent', () => {
  let component: SyntheticLinesComponent;
  let fixture: ComponentFixture<SyntheticLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheticLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheticLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
