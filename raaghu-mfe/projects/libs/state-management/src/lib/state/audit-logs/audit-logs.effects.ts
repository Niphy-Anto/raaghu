import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { getAuditLogsSuccess, getAuditLogs, getAuditLogsFailure, getEntityChanges, getEntityChangesFailure, getEntityChangesSuccess, getAuditLogDetails } from "./audit-logs.actions";


@Injectable()
export class AuditLogsEffects {
  constructor(private actions$: Actions, private auditLogsService: ServiceProxy) { }
  getAuditLogs = createEffect(() =>
    this.actions$.pipe(
      ofType(getAuditLogs),
      switchMap(({auditLogParams}) =>
        // Call the getTodos method, convert it to an observable
        from(this.auditLogsService.auditLogs(auditLogParams.startDate,auditLogParams.endDate,undefined,auditLogParams.userName,undefined,undefined,undefined,undefined,undefined,auditLogParams.maxExecutionDuration,auditLogParams.minExecutionDuration,auditLogParams.HasException,auditLogParams.sorting,auditLogParams.skipCount,auditLogParams.maxResultCount)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((auditLogs) => {
            return getAuditLogsSuccess({ auditLogs })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAuditLogsFailure({ error })))
        )
      )
    )
  );
  getAuditLogDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(getAuditLogDetails),
      switchMap(({id}) =>
        // Call the getTodos method, convert it to an observable
        from(this.auditLogsService.auditLogs2(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((auditLogs) => {
            return getAuditLogsSuccess({ auditLogs })
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
      from(this.auditLogsService.entityChanges(changeLogsParams.entityChangeSetId,undefined,undefined,undefined,changeLogsParams.startDate,changeLogsParams.endDate,undefined,changeLogsParams.skipCount,changeLogsParams.maxResultCount)).pipe(
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

