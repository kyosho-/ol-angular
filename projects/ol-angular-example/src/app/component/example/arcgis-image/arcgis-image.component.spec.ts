import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcgisImageComponent } from './arcgis-image.component';

describe('ArcgisImageComponent', () => {
  let component: ArcgisImageComponent;
  let fixture: ComponentFixture<ArcgisImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcgisImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcgisImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
