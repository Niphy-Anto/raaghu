import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompAuditLogsComponent } from './rds-comp-audit-logs.component';

describe('RdsCompAuditLogsComponent', () => {
  let component: RdsCompAuditLogsComponent;
  let fixture: ComponentFixture<RdsCompAuditLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompAuditLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompAuditLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
