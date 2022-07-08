import { TestBed } from '@angular/core/testing';

import { RdsIconService } from './rds-icon.service';

describe('RdsIconService', () => {
  let service: RdsIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
