import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprojectionByCodeComponent } from './reprojection-by-code.component';

describe('ReprojectionByCodeComponent', () => {
  let component: ReprojectionByCodeComponent;
  let fixture: ComponentFixture<ReprojectionByCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprojectionByCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprojectionByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
