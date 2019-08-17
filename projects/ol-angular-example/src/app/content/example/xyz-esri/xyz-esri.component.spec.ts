import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XyzEsriComponent } from './xyz-esri.component';

describe('XyzEsriComponent', () => {
  let component: XyzEsriComponent;
  let fixture: ComponentFixture<XyzEsriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XyzEsriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XyzEsriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
