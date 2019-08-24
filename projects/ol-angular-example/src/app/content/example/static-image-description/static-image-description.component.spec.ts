import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticImageDescriptionComponent } from './static-image-description.component';

describe('StaticImageDescriptionComponent', () => {
  let component: StaticImageDescriptionComponent;
  let fixture: ComponentFixture<StaticImageDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticImageDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticImageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
