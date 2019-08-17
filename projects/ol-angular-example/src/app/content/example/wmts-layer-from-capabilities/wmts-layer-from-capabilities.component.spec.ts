import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtsLayerFromCapabilitiesComponent } from './wmts-layer-from-capabilities.component';

describe('WmtsLayerFromCapabilitiesComponent', () => {
  let component: WmtsLayerFromCapabilitiesComponent;
  let fixture: ComponentFixture<WmtsLayerFromCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmtsLayerFromCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtsLayerFromCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
