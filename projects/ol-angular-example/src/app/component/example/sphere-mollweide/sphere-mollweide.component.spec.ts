import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SphereMollweideComponent } from './sphere-mollweide.component';

describe('SphereMollweideComponent', () => {
  let component: SphereMollweideComponent;
  let fixture: ComponentFixture<SphereMollweideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SphereMollweideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SphereMollweideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
