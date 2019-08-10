import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtsHidpiComponent } from './wmts-hidpi.component';

describe('WmtsHidpiComponent', () => {
  let component: WmtsHidpiComponent;
  let fixture: ComponentFixture<WmtsHidpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmtsHidpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtsHidpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
