import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionsDescriptionComponent } from './attributions-description.component';

describe('AttributionsDescriptionComponent', () => {
  let component: AttributionsDescriptionComponent;
  let fixture: ComponentFixture<AttributionsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributionsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributionsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
