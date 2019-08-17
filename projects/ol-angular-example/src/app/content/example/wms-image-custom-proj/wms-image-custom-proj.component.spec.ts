import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsImageCustomProjComponent } from './wms-image-custom-proj.component';

describe('WmsImageCustomProjComponent', () => {
  let component: WmsImageCustomProjComponent;
  let fixture: ComponentFixture<WmsImageCustomProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsImageCustomProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsImageCustomProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
