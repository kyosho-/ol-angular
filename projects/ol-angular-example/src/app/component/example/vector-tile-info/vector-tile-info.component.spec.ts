import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorTileInfoComponent } from './vector-tile-info.component';

describe('VectorTileInfoComponent', () => {
  let component: VectorTileInfoComponent;
  let fixture: ComponentFixture<VectorTileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorTileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorTileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
