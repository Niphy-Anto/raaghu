import { Injectable } from "@angular/core";
import { AlertService } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EditionServiceProxy, HostSettingsServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { getSettingFailure, getSettings, getSettingsTenantPageComboboxItems, getSettingsTenantPageComboboxItemsFailure, getSettingsTenantPageComboboxItemsSuccess, getSettingSuccess, sendTestmail, updateSettings } from "./settings.actions";


@Injectable()
export class SettingEffects {

  constructor(private actions$: Actions, private settingService: HostSettingsServiceProxy,
    private alertService: AlertService, private editionService: EditionServiceProxy) { }
    getSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSettings),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.settingService.getAllSettings()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((Setting) => {
              return getSettingSuccess({ settings: Setting })
            }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getSettingFailure({ error })))
        )
      )
    )
  );

  getSettingsTenantPageComboboxItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSettingsTenantPageComboboxItems),
      switchMap(() => {
        return (this.editionService.getEditionComboboxItems(undefined, undefined, undefined)).pipe(
          map((editions: any) => {
            return getSettingsTenantPageComboboxItemsSuccess({ settingsComboboxItem: editions })
          }),
          catchError((error) => of(getSettingsTenantPageComboboxItemsFailure({ error })))
        )
      }
      )
    )
  );
  updateAllsettings$ = createEffect(() =>
this.actions$.pipe(
  ofType(updateSettings),
  mergeMap(({setting}) =>
    this.settingService.updateAllSettings(setting).pipe(map((res: any) => {     
      this.alertService.showAlert('Success', 'Settings updated successfully', 'success');
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

sendTestMail$ = createEffect(() =>
this.actions$.pipe(
  ofType(sendTestmail),
  mergeMap(({MailId}) =>
    this.settingService.sendTestEmail(MailId).pipe(map((res: any) => {     
      this.alertService.showAlert('Success', 'Test mail send successfully', 'success');
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

