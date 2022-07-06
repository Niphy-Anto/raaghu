import { TestBed } from '@angular/core/testing';

import { RdsTagsService } from './rds-tags.service';

describe('RdsTagsService', () => {
  let service: RdsTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
