import { Injectable } from '@angular/core';
import { AlertService } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EntityDtoOfGuid, NotificationServiceProxy, UserLinkServiceProxy } from 'projects/libs/shared/src/lib/service-proxies';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { deleteAccount, getMLATenancyData, getMLATenancyDataFailure, getMLATenancyDataSuccess, getUserNotification, getUserNotificationFailure, getUserNotificationSuccess, linkToUser, SetAllNotificationsAsRead, SetNotificationRead } from './mla.actions';


@Injectable()
export class MLAEffects {
  constructor(
    private actions$: Actions,
    private UserLinkService: UserLinkServiceProxy,
    private notificationService: NotificationServiceProxy,
    private store: Store,
    private alertService: AlertService
  ) { }

  getMLATenancyData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMLATenancyData),
      switchMap(() => {
        return (this.UserLinkService.getRecentlyUsedLinkedUsers()).pipe(
          map((tenancyData) => {
            return getMLATenancyDataSuccess({
              tenancyData
            });
          }),
          catchError((error) => of(getMLATenancyDataFailure({ error })))
        )
      }
      )
    )
  );

  deleteAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAccount),
      mergeMap((data) =>
        this.UserLinkService.unlinkUser(data.user).pipe(map((res: any) => {
          this.store.dispatch(getMLATenancyData())
        }),
          catchError((error: any) => of(
          ))
        )

      )
    ),
    {
      dispatch: false
    }
  );

  linkToUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(linkToUser),
      mergeMap((data) =>
        this.UserLinkService.linkToUser(data.user).pipe(map((res: any) => {
          this.store.dispatch(getMLATenancyData())
        }),
          catchError((error: any) => of(
          ))
        )
      )
    ),
    {
      dispatch: false
    }
  );

  getUserNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserNotification),
      switchMap(() => {
        return (this.notificationService.getUserNotifications( undefined, undefined, undefined, undefined, undefined)).pipe(
          map((getNotificaitonsOutput) => {
            return getUserNotificationSuccess({ getNotificaitonsOutput });
          }),
          catchError((error) => of(getUserNotificationFailure({ error })))
        )
      }
      )
    )
  );

  SetAllNotificationsAsRead$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SetAllNotificationsAsRead),
    mergeMap((data) =>
      from(this.notificationService.setAllNotificationsAsRead()).pipe(
        map((res) => {
          this.alertService.showAlert('Success', 'Success','success' ) 
        }),
        catchError((error: any) => of(
          ))
        )
      )
    ),
    {
      dispatch: false
    }
);

SetNotificationRead$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetNotificationRead),
      mergeMap((data) =>
        this.notificationService.setNotificationAsRead(data).pipe(map((res) => {
          this.alertService.showAlert('Success', 'Success','success' )  
          }),
          catchError((error: any) => of(
            ))
          )
        )
      ),
      {
        dispatch: false
      }
  );  

 }