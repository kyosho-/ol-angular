import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmlTimezonesComponent } from './kml-timezones.component';

describe('KmlTimezonesComponent', () => {
  let component: KmlTimezonesComponent;
  let fixture: ComponentFixture<KmlTimezonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmlTimezonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmlTimezonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
