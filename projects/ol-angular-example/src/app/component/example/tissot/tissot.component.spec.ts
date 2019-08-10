import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TissotComponent } from './tissot.component';

describe('TissotComponent', () => {
  let component: TissotComponent;
  let fixture: ComponentFixture<TissotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TissotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TissotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
