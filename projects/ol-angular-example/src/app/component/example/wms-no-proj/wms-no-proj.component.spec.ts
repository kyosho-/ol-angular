import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsNoProjComponent } from './wms-no-proj.component';

describe('WmsNoProjComponent', () => {
  let component: WmsNoProjComponent;
  let fixture: ComponentFixture<WmsNoProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsNoProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsNoProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
