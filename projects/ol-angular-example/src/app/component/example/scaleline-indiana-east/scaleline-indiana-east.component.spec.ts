import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalelineIndianaEastComponent } from './scaleline-indiana-east.component';

describe('ScalelineIndianaEastComponent', () => {
  let component: ScalelineIndianaEastComponent;
  let fixture: ComponentFixture<ScalelineIndianaEastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalelineIndianaEastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalelineIndianaEastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
