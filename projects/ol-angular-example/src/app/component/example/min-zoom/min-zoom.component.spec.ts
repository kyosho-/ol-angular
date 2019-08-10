import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinZoomComponent } from './min-zoom.component';

describe('MinZoomComponent', () => {
  let component: MinZoomComponent;
  let fixture: ComponentFixture<MinZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
