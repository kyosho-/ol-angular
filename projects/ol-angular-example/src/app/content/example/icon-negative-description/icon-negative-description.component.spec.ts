import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNegativeDescriptionComponent } from './icon-negative-description.component';

describe('IconNegativeDescriptionComponent', () => {
  let component: IconNegativeDescriptionComponent;
  let fixture: ComponentFixture<IconNegativeDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconNegativeDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconNegativeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
