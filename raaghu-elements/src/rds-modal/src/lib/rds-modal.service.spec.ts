import { TestBed } from '@angular/core/testing';

import { RdsModalService } from './rds-modal.service';

describe('RdsModalService', () => {
  let service: RdsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
