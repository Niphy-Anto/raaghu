import { TestBed } from '@angular/core/testing';

import { RdsCarouselService } from './rds-carousel.service';

describe('RdsCarouselService', () => {
  let service: RdsCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
