import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasTilesComponent } from './canvas-tiles.component';

describe('CanvasTilesComponent', () => {
  let component: CanvasTilesComponent;
  let fixture: ComponentFixture<CanvasTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
