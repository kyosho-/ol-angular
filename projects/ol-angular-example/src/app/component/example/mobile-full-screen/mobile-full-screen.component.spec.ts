import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFullScreenComponent } from './mobile-full-screen.component';

describe('MobileFullScreenComponent', () => {
  let component: MobileFullScreenComponent;
  let fixture: ComponentFixture<MobileFullScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFullScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
