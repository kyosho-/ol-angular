import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleDescriptionComponent } from './accessible-description.component';

describe('AccessibleDescriptionComponent', () => {
  let component: AccessibleDescriptionComponent;
  let fixture: ComponentFixture<AccessibleDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibleDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
