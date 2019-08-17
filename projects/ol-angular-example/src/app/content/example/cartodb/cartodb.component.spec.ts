import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartodbComponent } from './cartodb.component';

describe('CartodbComponent', () => {
  let component: CartodbComponent;
  let fixture: ComponentFixture<CartodbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartodbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartodbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
