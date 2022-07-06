import { TestBed } from '@angular/core/testing';

import { RdsFabMenuService } from './rds-fab-menu.service';

describe('RdsFabMenuService', () => {
  let service: RdsFabMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsFabMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
