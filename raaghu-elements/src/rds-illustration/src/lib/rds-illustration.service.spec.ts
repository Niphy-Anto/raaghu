import { TestBed } from '@angular/core/testing';

import { RdsIllustrationService } from './rds-illustration.service';

describe('RdsIllustrationService', () => {
  let service: RdsIllustrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsIllustrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
