import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorTileSelectionComponent } from './vector-tile-selection.component';

describe('VectorTileSelectionComponent', () => {
  let component: VectorTileSelectionComponent;
  let fixture: ComponentFixture<VectorTileSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorTileSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorTileSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
