import { TestBed } from '@angular/core/testing';

import { GsiService } from './gsi.service';

describe('GsiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsiService = TestBed.get(GsiService);
    expect(service).toBeTruthy();
  });
});
