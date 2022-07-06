import { TestBed } from '@angular/core/testing';

import { RdsWidgetService } from './rds-widget.service';

describe('RdsWidgetService', () => {
  let service: RdsWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
