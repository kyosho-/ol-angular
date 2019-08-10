import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprojectionComponent } from './reprojection.component';

describe('ReprojectionComponent', () => {
  let component: ReprojectionComponent;
  let fixture: ComponentFixture<ReprojectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprojectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprojectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
