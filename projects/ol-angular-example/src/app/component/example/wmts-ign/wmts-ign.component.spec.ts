import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtsIgnComponent } from './wmts-ign.component';

describe('WmtsIgnComponent', () => {
  let component: WmtsIgnComponent;
  let fixture: ComponentFixture<WmtsIgnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmtsIgnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtsIgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
