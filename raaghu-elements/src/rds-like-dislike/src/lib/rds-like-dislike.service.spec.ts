import { TestBed } from '@angular/core/testing';

import { RdsLikeDislikeService } from './rds-like-dislike.service';

describe('RdsLikeDislikeService', () => {
  let service: RdsLikeDislikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsLikeDislikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
