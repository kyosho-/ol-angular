import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsTiledWrap180Component } from './wms-tiled-wrap180.component';

describe('WmsTiledWrap180Component', () => {
  let component: WmsTiledWrap180Component;
  let fixture: ComponentFixture<WmsTiledWrap180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsTiledWrap180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsTiledWrap180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
