import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapguideUntiledComponent } from './mapguide-untiled.component';

describe('MapguideUntiledComponent', () => {
  let component: MapguideUntiledComponent;
  let fixture: ComponentFixture<MapguideUntiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapguideUntiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapguideUntiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
