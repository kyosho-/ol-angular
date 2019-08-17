import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomConstrainedComponent } from './zoom-constrained.component';

describe('ZoomConstrainedComponent', () => {
  let component: ZoomConstrainedComponent;
  let fixture: ComponentFixture<ZoomConstrainedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomConstrainedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomConstrainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
