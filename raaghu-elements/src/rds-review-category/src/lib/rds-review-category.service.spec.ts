import { TestBed } from '@angular/core/testing';

import { RdsReviewCategoryService } from './rds-review-category.service';

describe('RdsReviewCategoryService', () => {
  let service: RdsReviewCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsReviewCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
