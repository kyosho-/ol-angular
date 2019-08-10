import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfeatureinfoLayersComponent } from './getfeatureinfo-layers.component';

describe('GetfeatureinfoLayersComponent', () => {
  let component: GetfeatureinfoLayersComponent;
  let fixture: ComponentFixture<GetfeatureinfoLayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetfeatureinfoLayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfeatureinfoLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
