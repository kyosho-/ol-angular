import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';

describe('ExampleService', () => {
  beforeEach(() => {
    const locationSpy = jasmine.createSpyObj('Location', ['prepareExternalUrl']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        {
          provide: Location,
          useValue: locationSpy
        }
      ]
    });
  });

  it('should be created', () => {
    const service: ExampleService = TestBed.get(ExampleService);
    expect(service).toBeTruthy();
  });
});
