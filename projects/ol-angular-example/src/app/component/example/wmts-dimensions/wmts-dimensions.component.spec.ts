import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtsDimensionsComponent } from './wmts-dimensions.component';

describe('WmtsDimensionsComponent', () => {
  let component: WmtsDimensionsComponent;
  let fixture: ComponentFixture<WmtsDimensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmtsDimensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtsDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
