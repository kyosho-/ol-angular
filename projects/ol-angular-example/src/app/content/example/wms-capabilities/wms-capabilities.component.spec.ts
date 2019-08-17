import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsCapabilitiesComponent } from './wms-capabilities.component';

describe('WmsCapabilitiesComponent', () => {
  let component: WmsCapabilitiesComponent;
  let fixture: ComponentFixture<WmsCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
