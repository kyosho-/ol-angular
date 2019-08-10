import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLoadEventsComponent } from './image-load-events.component';

describe('ImageLoadEventsComponent', () => {
  let component: ImageLoadEventsComponent;
  let fixture: ComponentFixture<ImageLoadEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLoadEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLoadEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
