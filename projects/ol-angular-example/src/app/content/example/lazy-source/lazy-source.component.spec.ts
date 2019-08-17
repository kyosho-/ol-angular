import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySourceComponent } from './lazy-source.component';

describe('LazySourceComponent', () => {
  let component: LazySourceComponent;
  let fixture: ComponentFixture<LazySourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazySourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
