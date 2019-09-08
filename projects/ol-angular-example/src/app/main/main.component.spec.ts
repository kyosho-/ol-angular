import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { ActivatedRouteStub } from '../testing/activated-route-stub.spec';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';

describe('MainComponent', () => {
  let activatedRoute: ActivatedRouteStub;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();
    const locationSpy = jasmine.createSpyObj('Location', ['prepareExternalUrl']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        RouterModule.forRoot([]),
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule
      ],
      declarations: [
        MainComponent,
        NavigationComponent
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        },
        {
          provide: Location,
          useValue: locationSpy
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
