import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFeaturesComponent } from './modify-features.component';

describe('ModifyFeaturesComponent', () => {
  let component: ModifyFeaturesComponent;
  let fixture: ComponentFixture<ModifyFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
