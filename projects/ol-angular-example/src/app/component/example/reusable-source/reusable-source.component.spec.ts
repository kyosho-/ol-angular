import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableSourceComponent } from './reusable-source.component';

describe('ReusableSourceComponent', () => {
  let component: ReusableSourceComponent;
  let fixture: ComponentFixture<ReusableSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
