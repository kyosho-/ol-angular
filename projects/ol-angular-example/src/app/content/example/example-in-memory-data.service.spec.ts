import { TestBed } from '@angular/core/testing';

import { ExampleInMemoryDataService } from './example-in-memory-data.service';

describe('ExampleInMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleInMemoryDataService = TestBed.get(ExampleInMemoryDataService);
    expect(service).toBeTruthy();
  });
});
