import { Injectable } from "@angular/core";
import { AlertService, LanguageServiceProxy } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { languageText } from "../../app.interface";
import { getLanguageTextFailure, getLanguageTexts, getLanguageTextSuccess, updateLanguageText } from "./language-text.actions";

@Injectable()
export class LanguageTextEffects {
    constructor(private actions$: Actions, private languageService: LanguageServiceProxy, private store: Store, private alertService: AlertService) { }
    getLanguageTexts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getLanguageTexts),
            switchMap(({ languageTextParams }) => {

                // Call the getTodos method, convert it to an observable
                return (this.languageService.getLanguageTexts(languageTextParams.maxResultCount, languageTextParams.skipCount,
                     languageTextParams.sorting, languageTextParams.sourceName, languageTextParams.baseLanguageName,
                      languageTextParams.targetLanguageName, languageTextParams.targetValueFilter, languageTextParams.filterText
                      )).pipe(
                    // Take the returned value and return a new success action containing the todos
                    map((languageText) => {
                        return getLanguageTextSuccess({ languageText })
                    }),
                    // Or... if it errors return a new failure action containing the error
                    catchError((error) => of(getLanguageTextFailure({ error })))
                )
            }

            )
        )
    );

    updateLanguageText$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLanguageText),
      mergeMap((data) =>
        this.languageService.updateLanguageText(data.languageText).pipe(map((res: any) => {
          //this.store.dispatch(getLanguageTexts(languageText));
          this.alertService.showAlert('Success', 'Language text updated successfully','success' )
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