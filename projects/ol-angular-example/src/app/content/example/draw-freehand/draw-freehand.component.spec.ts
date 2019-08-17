import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawFreehandComponent } from './draw-freehand.component';

describe('DrawFreehandComponent', () => {
  let component: DrawFreehandComponent;
  let fixture: ComponentFixture<DrawFreehandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawFreehandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawFreehandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
