import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Epsg4326Component } from './epsg4326.component';

describe('Epsg4326Component', () => {
  let component: Epsg4326Component;
  let fixture: ComponentFixture<Epsg4326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Epsg4326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Epsg4326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
