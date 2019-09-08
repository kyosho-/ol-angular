import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';
import { ActivatedRouteStub } from '../../testing/activated-route-stub.spec';

describe('NavigationComponent', () => {
  let activatedRoute: ActivatedRouteStub;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();
    const locationSpy = jasmine.createSpyObj('Location', ['prepareExternalUrl']);

    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        MatIconModule,
        MatListModule,
        HttpClientModule
      ],
      declarations: [
        NavigationComponent
      ],
      providers: [
        {
          provide: Location,
          useValue: locationSpy
        },
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
