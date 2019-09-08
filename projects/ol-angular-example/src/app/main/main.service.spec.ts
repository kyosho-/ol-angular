import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';
import { MatIconModule } from '@angular/material/icon';

describe('MainService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatIconModule
    ]
  }));

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });
});
