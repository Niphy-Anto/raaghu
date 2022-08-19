import { TestBed } from '@angular/core/testing';

import { RdsTeamMemberService } from './rds-team-member.service';

describe('RdsTeamMemberService', () => {
  let service: RdsTeamMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsTeamMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
