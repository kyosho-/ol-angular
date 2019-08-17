import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizedOpenstreetmapComponent } from './localized-openstreetmap.component';

describe('LocalizedOpenstreetmapComponent', () => {
  let component: LocalizedOpenstreetmapComponent;
  let fixture: ComponentFixture<LocalizedOpenstreetmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizedOpenstreetmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizedOpenstreetmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
