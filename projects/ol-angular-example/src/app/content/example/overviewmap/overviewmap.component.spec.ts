import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewmapComponent } from './overviewmap.component';

describe('OverviewmapComponent', () => {
  let component: OverviewmapComponent;
  let fixture: ComponentFixture<OverviewmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
