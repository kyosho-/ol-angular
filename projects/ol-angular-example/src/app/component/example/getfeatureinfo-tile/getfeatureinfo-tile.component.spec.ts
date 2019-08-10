import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfeatureinfoTileComponent } from './getfeatureinfo-tile.component';

describe('GetfeatureinfoTileComponent', () => {
  let component: GetfeatureinfoTileComponent;
  let fixture: ComponentFixture<GetfeatureinfoTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetfeatureinfoTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfeatureinfoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
