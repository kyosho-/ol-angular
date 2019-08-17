import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonStylesComponent } from './polygon-styles.component';

describe('PolygonStylesComponent', () => {
  let component: PolygonStylesComponent;
  let fixture: ComponentFixture<PolygonStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
