import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuditLogServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { getAuditLogsSuccess, getAuditLogs, getAuditLogsFailure, getEntityChanges, getEntityChangesFailure, getEntityChangesSuccess } from "./audit-logs.actions";


@Injectable()
export class AuditLogsEffects {
  constructor(private actions$: Actions, private auditLogsService: AuditLogServiceProxy) { }
  getAuditLogs = createEffect(() =>
    this.actions$.pipe(
      ofType(getAuditLogs),
      switchMap(({auditLogParams}) =>
        // Call the getTodos method, convert it to an observable
        from(this.auditLogsService.getAuditLogs(auditLogParams.startDate,auditLogParams.endDate,auditLogParams.userName,auditLogParams.serviceName,auditLogParams.MethodName,auditLogParams.BrowserInfo,auditLogParams.HasException,auditLogParams.minExecutionDuration,auditLogParams.maxExecutionDuration,auditLogParams.sorting,auditLogParams.maxResultCount,auditLogParams.skipCount)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((auditLogs) => {
            return getAuditLogsSuccess({ auditLogs: auditLogs })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAuditLogsFailure({ error })))
        )
      )
    )
  );

  getEntityChanges$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getEntityChanges),
    switchMap(({changeLogsParams}) =>
      // Call the getTodos method, convert it to an observable
      from(this.auditLogsService.getEntityChanges(changeLogsParams.startDate,changeLogsParams.endDate,changeLogsParams.userName,changeLogsParams.entityTypeFullName,changeLogsParams.entityChangeSetId,changeLogsParams.maxResultCount,changeLogsParams.skipCount)).pipe(
        // Take the returned value and return a new success action containing the todos
        map((changeLogs) => {
          return getEntityChangesSuccess({ changeLogs: changeLogs })
        }),
        // Or... if it errors return a new failure action containing the error
        catchError((error) => of(getEntityChangesFailure({ error })))
      )
    )
  )
);
}

