import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionGrowindComponent } from './region-growind.component';

describe('RegionGrowindComponent', () => {
  let component: RegionGrowindComponent;
  let fixture: ComponentFixture<RegionGrowindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionGrowindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionGrowindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
