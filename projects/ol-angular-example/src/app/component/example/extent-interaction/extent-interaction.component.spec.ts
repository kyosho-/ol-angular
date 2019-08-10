import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtentInteractionComponent } from './extent-interaction.component';

describe('ExtentInteractionComponent', () => {
  let component: ExtentInteractionComponent;
  let fixture: ComponentFixture<ExtentInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtentInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
