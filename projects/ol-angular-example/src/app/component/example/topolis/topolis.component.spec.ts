import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopolisComponent } from './topolis.component';

describe('TopolisComponent', () => {
  let component: TopolisComponent;
  let fixture: ComponentFixture<TopolisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopolisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
