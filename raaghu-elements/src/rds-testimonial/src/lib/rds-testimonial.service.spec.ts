import { TestBed } from '@angular/core/testing';

import { RdsTestimonialService } from './rds-testimonial.service';

describe('RdsTestimonialService', () => {
  let service: RdsTestimonialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsTestimonialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
