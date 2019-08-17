import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsImageComponent } from './wms-image.component';

describe('WmsImageComponent', () => {
  let component: WmsImageComponent;
  let fixture: ComponentFixture<WmsImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
