import { TestBed } from '@angular/core/testing';

import { OlAngularService } from './ol-angular.service';

describe('OlAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OlAngularService = TestBed.get(OlAngularService);
    expect(service).toBeTruthy();
  });
});
