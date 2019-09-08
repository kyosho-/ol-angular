import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomControlComponent } from './zoom-control.component';
import { MatIconModule } from '@angular/material/icon';

describe('ZoomControlComponent', () => {
  let component: ZoomControlComponent;
  let fixture: ComponentFixture<ZoomControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [ZoomControlComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
