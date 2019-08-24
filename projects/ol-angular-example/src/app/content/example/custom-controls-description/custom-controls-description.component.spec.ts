import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomControlsDescriptionComponent } from './custom-controls-description.component';

describe('CustomControlsDescriptionComponent', () => {
  let component: CustomControlsDescriptionComponent;
  let fixture: ComponentFixture<CustomControlsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomControlsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomControlsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
