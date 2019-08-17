import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewmapCustomComponent } from './overviewmap-custom.component';

describe('OverviewmapCustomComponent', () => {
  let component: OverviewmapCustomComponent;
  let fixture: ComponentFixture<OverviewmapCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewmapCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewmapCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
