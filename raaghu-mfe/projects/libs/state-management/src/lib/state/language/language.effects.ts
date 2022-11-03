import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
//import { deleteLanguage } from "@libs/state-management";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  deleteLanguage,
  getCultureList,
  getCultureListSuccess,
  getLanguageFailure,
  getLanguageForEdit,
  getLanguageForEditFailure,
  getLanguageForEditSuccess,
  getLanguages,
  getLanguageSuccess,
  saveLanguage,
  saveLanguageSuccess,
  setDefaultLanguage,
  setDefaultLanguageForUI,
  updateLanguage,
} from './language.actions';

@Injectable()
export class LanguageEffects {
  constructor(
    private actions$: Actions,
    private languageService: ServiceProxy,
    private store: Store,
    private alertService: AlertService
  ) {}
  // getProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //       ofType(ProductActions.getProducts),
  //       mergeMap(() => {
  //           return this.productService.getProducts().pipe(
  //               map(products => ProductActions.getProductsSuccess({ products }))
  //           );
  //       }),
  //   )
  // );

  getLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguages),
      switchMap(() => {

        // Call the getTodos method, convert it to an observable
        return (this.languageService.all()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((languages) => {
            return getLanguageSuccess({ languages })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getLanguageFailure({ error })))
        )
      }

      )
    )
  );
  getLanguagesForEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguageForEdit),
      switchMap(({id}) => {
        // Call the getTodos method, convert it to an observable
        return (this.languageService.languagesGET2(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((languageInfo) => {
            return getLanguageForEditSuccess({ languageInfo })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getLanguageFailure({ error })))
        )
      }

      )
    )
  );
  

  getCultureList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCultureList),
      switchMap(() =>

        // Call the getTodos method, convert it to an observable
        from (this.languageService.cultureList()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((cultureList) => {
            return getCultureListSuccess({ cultureList })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getLanguageFailure({ error })))
        )
      )
    )
  );

//   
  deleteLanguage$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteLanguage),
    mergeMap(({ id }) =>
      this.languageService.languagesDELETE(id).pipe(map(() => {
        this.store.dispatch(getLanguages());
        this.alertService.showAlert('Success', 'Language deleted successfully', 'success')

      }
      ),
        catchError((error) => of())
      )
    )
  ),
  // Most effects dispatch another action, but this one is just a "fire and forget" effect
  { dispatch: false }
);

  saveLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveLanguage),
      switchMap((data) =>
        this.languageService.languagesPOST(data.body).pipe(map(() => {
          this.store.dispatch(getLanguages());
          this.alertService.showAlert('Success', 'added language successfully', 'success')

        }
        ),
          catchError((error) => of())
        )
      )
    ),
    { dispatch: false }
  );

  
  updateLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLanguage),
      switchMap((data) =>
        this.languageService.languagesPUT(data.id, data.body).pipe(map(() => {
          this.store.dispatch(getLanguages());
          this.alertService.showAlert('Success', 'added language successfully', 'success')

        }
        ),
          catchError((error) => of())
        )
      )
    ),
    { dispatch: false }
  );
  // setDefaultLanguageForUI$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(setDefaultLanguageForUI),
  //     map(({ name }) => {
  //       return setDefaultLanguageForUISuccess(name)
  //     }

  //     )
  //   )
  // );
}
