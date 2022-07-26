import { TestBed } from '@angular/core/testing';

import { RdsRatingService } from './rds-rating.service';

describe('RdsRatingService', () => {
  let service: RdsRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
