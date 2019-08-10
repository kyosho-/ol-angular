import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSpriteWebglComponent } from './icon-sprite-webgl.component';

describe('IconSpriteWebglComponent', () => {
  let component: IconSpriteWebglComponent;
  let fixture: ComponentFixture<IconSpriteWebglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSpriteWebglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSpriteWebglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
