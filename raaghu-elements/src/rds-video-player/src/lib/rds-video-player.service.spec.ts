import { TestBed } from '@angular/core/testing';

import { RdsVideoPlayerService } from './rds-video-player.service';

describe('RdsVideoPlayerService', () => {
  let service: RdsVideoPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsVideoPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
