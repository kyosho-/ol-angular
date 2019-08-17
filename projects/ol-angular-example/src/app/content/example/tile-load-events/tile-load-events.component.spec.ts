import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLoadEventsComponent } from './tile-load-events.component';

describe('TileLoadEventsComponent', () => {
  let component: TileLoadEventsComponent;
  let fixture: ComponentFixture<TileLoadEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileLoadEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileLoadEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
