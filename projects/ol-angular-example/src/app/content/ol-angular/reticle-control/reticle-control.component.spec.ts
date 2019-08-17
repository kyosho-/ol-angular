import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReticleControlComponent } from './reticle-control.component';

describe('ReticleControlComponent', () => {
  let component: ReticleControlComponent;
  let fixture: ComponentFixture<ReticleControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReticleControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReticleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
