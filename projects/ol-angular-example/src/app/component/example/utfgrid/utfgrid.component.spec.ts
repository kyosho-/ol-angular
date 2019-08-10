import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtfgridComponent } from './utfgrid.component';

describe('UtfgridComponent', () => {
  let component: UtfgridComponent;
  let fixture: ComponentFixture<UtfgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtfgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtfgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
