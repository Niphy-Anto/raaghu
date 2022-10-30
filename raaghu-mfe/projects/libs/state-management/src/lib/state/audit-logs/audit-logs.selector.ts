import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, auditLogs } from '../../app.interface';
import { AuditLogsState } from './audit-logs.reducer';

export const selectAuditLogs = createFeatureSelector<AppState>(auditLogs);
export const selectAllAuditLogs = createSelector(
  selectAuditLogs,
  (state: AppState) => state.auditLogs
);
export const selectAllchangeLogs = createSelector(
  selectAuditLogs,
  (state: AppState) => state.changeLogs
);
