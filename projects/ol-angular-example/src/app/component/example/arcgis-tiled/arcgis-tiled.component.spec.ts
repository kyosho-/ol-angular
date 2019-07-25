import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcgisTiledComponent } from './arcgis-tiled.component';

describe('ArcgisTiledComponent', () => {
  let component: ArcgisTiledComponent;
  let fixture: ComponentFixture<ArcgisTiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcgisTiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcgisTiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
