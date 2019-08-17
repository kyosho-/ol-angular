import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilejsonComponent } from './tilejson.component';

describe('TilejsonComponent', () => {
  let component: TilejsonComponent;
  let fixture: ComponentFixture<TilejsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilejsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilejsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
