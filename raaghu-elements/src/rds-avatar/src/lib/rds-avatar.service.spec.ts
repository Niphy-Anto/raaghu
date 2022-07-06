import { TestBed } from '@angular/core/testing';

import { RdsAvatarService } from './rds-avatar.service';

describe('RdsAvatarService', () => {
  let service: RdsAvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsAvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
