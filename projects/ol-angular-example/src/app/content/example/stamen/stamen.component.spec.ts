import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StamenComponent } from './stamen.component';

describe('StamenComponent', () => {
  let component: StamenComponent;
  let fixture: ComponentFixture<StamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
