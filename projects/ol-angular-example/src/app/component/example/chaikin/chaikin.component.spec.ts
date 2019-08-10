import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaikinComponent } from './chaikin.component';

describe('ChaikinComponent', () => {
  let component: ChaikinComponent;
  let fixture: ComponentFixture<ChaikinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaikinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaikinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
