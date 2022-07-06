import { createAction, props } from "@ngrx/store";
import { AuditLogs } from "./audit-logs.models";

export const getAuditLogs = createAction('[AuditLogs Page] Get AuditLogs',
(auditLogParams: any) => ({ auditLogParams}));

export const getAuditLogsSuccess = createAction(
  '[AuditLogs Page] Get AuditLogs Success',
  props<{ auditLogs: AuditLogs }>()
);

export const getAuditLogsFailure = createAction(
  '[AuditLogs Page] Get AuditLogs Failure',
  props<{ error: string }>()
);

export const getEntityChanges = createAction('[AuditLogs Page] Get Change Logs',
(changeLogsParams: any) => ({ changeLogsParams}));

export const getEntityChangesSuccess = createAction(
  '[AuditLogs Page] Get Change Logs Success',
  props<{ changeLogs: any }>()
);

export const getEntityChangesFailure = createAction(
  '[AuditLogs Page] Get Change Logs Failure',
  props<{ error: string }>()
);

