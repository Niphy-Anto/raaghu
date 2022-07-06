import { TestBed } from '@angular/core/testing';

import { RdsScrollspyService } from './rds-scrollspy.service';

describe('RdsScrollspyService', () => {
  let service: RdsScrollspyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsScrollspyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
