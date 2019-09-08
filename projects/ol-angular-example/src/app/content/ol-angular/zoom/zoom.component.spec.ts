import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomComponent } from './zoom.component';
import { ZoomControlComponent } from '../zoom-control/zoom-control.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('ZoomComponent', () => {
  let component: ZoomComponent;
  let fixture: ComponentFixture<ZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [
        ZoomComponent,
        ZoomControlComponent
      ]
    }).overrideModule(
      BrowserDynamicTestingModule,
      {
        set: {
          entryComponents: [
            ZoomControlComponent
          ]
        }
      }
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
