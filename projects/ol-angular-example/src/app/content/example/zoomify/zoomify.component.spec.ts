import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomifyComponent } from './zoomify.component';

describe('ZoomifyComponent', () => {
  let component: ZoomifyComponent;
  let fixture: ComponentFixture<ZoomifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
