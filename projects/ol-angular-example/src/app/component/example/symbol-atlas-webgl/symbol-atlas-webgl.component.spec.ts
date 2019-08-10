import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolAtlasWebglComponent } from './symbol-atlas-webgl.component';

describe('SymbolAtlasWebglComponent', () => {
  let component: SymbolAtlasWebglComponent;
  let fixture: ComponentFixture<SymbolAtlasWebglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolAtlasWebglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolAtlasWebglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
