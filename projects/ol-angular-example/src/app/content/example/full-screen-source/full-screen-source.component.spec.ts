import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenSourceComponent } from './full-screen-source.component';

describe('FullScreenSourceComponent', () => {
  let component: FullScreenSourceComponent;
  let fixture: ComponentFixture<FullScreenSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
