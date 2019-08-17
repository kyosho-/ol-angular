import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsCustomTilegridX512x256Component } from './wms-custom-tilegrid-x512x256.component';

describe('WmsCustomTilegridX512x256Component', () => {
  let component: WmsCustomTilegridX512x256Component;
  let fixture: ComponentFixture<WmsCustomTilegridX512x256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsCustomTilegridX512x256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsCustomTilegridX512x256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
