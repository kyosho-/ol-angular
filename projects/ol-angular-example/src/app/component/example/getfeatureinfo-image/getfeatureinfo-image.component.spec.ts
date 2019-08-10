import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfeatureinfoImageComponent } from './getfeatureinfo-image.component';

describe('GetfeatureinfoImageComponent', () => {
  let component: GetfeatureinfoImageComponent;
  let fixture: ComponentFixture<GetfeatureinfoImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetfeatureinfoImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfeatureinfoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
