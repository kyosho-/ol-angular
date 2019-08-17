import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtsCapabilitiesComponent } from './wmts-capabilities.component';

describe('WmtsCapabilitiesComponent', () => {
  let component: WmtsCapabilitiesComponent;
  let fixture: ComponentFixture<WmtsCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmtsCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtsCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
