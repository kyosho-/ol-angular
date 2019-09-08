import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReticleComponent } from './reticle.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ReticleControlComponent } from '../reticle-control/reticle-control.component';

describe('ReticleComponent', () => {
  let component: ReticleComponent;
  let fixture: ComponentFixture<ReticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReticleComponent,
        ReticleControlComponent
      ]
    })
      .overrideModule(
        BrowserDynamicTestingModule,
        {
          set: {
            entryComponents: [
              ReticleControlComponent
            ]
          }
        }
      )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
