import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsTiledComponent } from './wms-tiled.component';

describe('WmsTiledComponent', () => {
  let component: WmsTiledComponent;
  let fixture: ComponentFixture<WmsTiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsTiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsTiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
