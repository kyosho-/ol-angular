import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlAngularComponent } from './ol-angular.component';

describe('OlAngularComponent', () => {
  let component: OlAngularComponent;
  let fixture: ComponentFixture<OlAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
