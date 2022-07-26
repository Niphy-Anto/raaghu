import { TestBed } from '@angular/core/testing';

import { RdsPopularPagesService } from './rds-popular-pages.service';

describe('RdsPopularPagesService', () => {
  let service: RdsPopularPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsPopularPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
