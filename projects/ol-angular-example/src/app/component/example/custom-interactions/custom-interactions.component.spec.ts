import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInteractionsComponent } from './custom-interactions.component';

describe('CustomInteractionsComponent', () => {
  let component: CustomInteractionsComponent;
  let fixture: ComponentFixture<CustomInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
