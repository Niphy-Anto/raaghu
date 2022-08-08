import { TestBed } from '@angular/core/testing';

import { RdsAppDetailsService } from './rds-app-details.service';

describe('RdsAppDetailsService', () => {
  let service: RdsAppDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAppDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
