import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprojectionImageComponent } from './reprojection-image.component';

describe('ReprojectionImageComponent', () => {
  let component: ReprojectionImageComponent;
  let fixture: ComponentFixture<ReprojectionImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprojectionImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprojectionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
