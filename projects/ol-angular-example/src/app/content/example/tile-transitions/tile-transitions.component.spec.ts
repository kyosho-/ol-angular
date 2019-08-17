import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileTransitionsComponent } from './tile-transitions.component';

describe('TileTransitionsComponent', () => {
  let component: TileTransitionsComponent;
  let fixture: ComponentFixture<TileTransitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileTransitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
