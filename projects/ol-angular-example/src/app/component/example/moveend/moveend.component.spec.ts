import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveendComponent } from './moveend.component';

describe('MoveendComponent', () => {
  let component: MoveendComponent;
  let fixture: ComponentFixture<MoveendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
