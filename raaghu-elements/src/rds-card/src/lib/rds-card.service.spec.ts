import { TestBed } from '@angular/core/testing';

import { RdsCardService } from './rds-card.service';

describe('RdsCardService', () => {
  let service: RdsCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
