import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMapComponent } from './export-map.component';

describe('ExportMapComponent', () => {
  let component: ExportMapComponent;
  let fixture: ComponentFixture<ExportMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
