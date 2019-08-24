import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcgisTiledDescriptionComponent } from './arcgis-tiled-description.component';

describe('ArcgisTiledDescriptionComponent', () => {
  let component: ArcgisTiledDescriptionComponent;
  let fixture: ComponentFixture<ArcgisTiledDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcgisTiledDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcgisTiledDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
