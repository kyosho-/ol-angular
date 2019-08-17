import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendModesComponent } from './blend-modes.component';

describe('BlendModesComponent', () => {
  let component: BlendModesComponent;
  let fixture: ComponentFixture<BlendModesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
