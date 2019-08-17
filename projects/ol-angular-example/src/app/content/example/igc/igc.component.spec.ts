import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgcComponent } from './igc.component';

describe('IgcComponent', () => {
  let component: IgcComponent;
  let fixture: ComponentFixture<IgcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
