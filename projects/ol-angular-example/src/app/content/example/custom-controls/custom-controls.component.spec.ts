import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomControlsComponent } from './custom-controls.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RotateNorthControlComponent } from './rotate-north-control/rotate-north-control.component';

describe('CustomControlsComponent', () => {
  let component: CustomControlsComponent;
  let fixture: ComponentFixture<CustomControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomControlsComponent,
        RotateNorthControlComponent
      ]
    })
      .overrideModule(
        BrowserDynamicTestingModule,
        {
          set: {
            entryComponents: [
              RotateNorthControlComponent
            ]
          }
        }
      )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
