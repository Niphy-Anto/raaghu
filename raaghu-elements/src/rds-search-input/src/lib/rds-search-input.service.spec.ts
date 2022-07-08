import { TestBed } from '@angular/core/testing';

import { RdsSearchInputService } from './rds-search-input.service';

describe('RdsSearchInputService', () => {
  let service: RdsSearchInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsSearchInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
