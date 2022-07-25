import { TestBed } from '@angular/core/testing';

import { RdsFeatureListService } from './rds-feature-list.service';

describe('RdsFeatureListService', () => {
  let service: RdsFeatureListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsFeatureListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
