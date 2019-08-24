import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDescriptionComponent } from './simple-description.component';

describe('SimpleDescriptionComponent', () => {
  let component: SimpleDescriptionComponent;
  let fixture: ComponentFixture<SimpleDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
