import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsTimeComponent } from './wms-time.component';

describe('WmsTimeComponent', () => {
  let component: WmsTimeComponent;
  let fixture: ComponentFixture<WmsTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
