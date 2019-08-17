import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetLabelsComponent } from './street-labels.component';

describe('StreetLabelsComponent', () => {
  let component: StreetLabelsComponent;
  let fixture: ComponentFixture<StreetLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
