import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsCustomProjComponent } from './wms-custom-proj.component';

describe('WmsCustomProjComponent', () => {
  let component: WmsCustomProjComponent;
  let fixture: ComponentFixture<WmsCustomProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsCustomProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsCustomProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
