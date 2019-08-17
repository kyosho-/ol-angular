import { TestBed } from '@angular/core/testing';

import { OlAngularInMemoryDataService } from './ol-angular-in-memory-data.service';

describe('OlAngularInMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OlAngularInMemoryDataService = TestBed.get(OlAngularInMemoryDataService);
    expect(service).toBeTruthy();
  });
});
