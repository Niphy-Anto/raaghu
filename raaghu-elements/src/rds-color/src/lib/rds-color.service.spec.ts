import { TestBed } from '@angular/core/testing';

import { RdsColorService } from './rds-color.service';

describe('RdsColorService', () => {
  let service: RdsColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
