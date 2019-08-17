import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFeaturesComponent } from './translate-features.component';

describe('TranslateFeaturesComponent', () => {
  let component: TranslateFeaturesComponent;
  let fixture: ComponentFixture<TranslateFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
