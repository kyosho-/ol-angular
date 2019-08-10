import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularshapeComponent } from './regularshape.component';

describe('RegularshapeComponent', () => {
  let component: RegularshapeComponent;
  let fixture: ComponentFixture<RegularshapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularshapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularshapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
