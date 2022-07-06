import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { UserLinkServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { getManageLinkedAccountsFailure, getManageLinkedAccounts, getManageLinkedAccountsSuccess,deleteLinkaccount } from "./manage-linked-accounts.actions";


@Injectable()
export class ManageLinkedAccountsEffects {
    constructor(private store: Store,private actions$: Actions, private UserLinkService: UserLinkServiceProxy) { }
    getManageLinkedAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getManageLinkedAccounts),
      switchMap(() =>{
        // Call the getTodos method, convert it to an observable
        return this.UserLinkService.getRecentlyUsedLinkedUsers().pipe(
          // Take the returned value and return a new success action containing the todos
          map((ManageLinkedAccounts) => {
              return getManageLinkedAccountsSuccess({ ManageLinkedAccounts: ManageLinkedAccounts })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getManageLinkedAccountsFailure({ error })))
        )
      }
        
      )
    )
  );
  // deleteLinkaccounts$ = createEffect ( () =>{
  //   return this.actions$.pipe(
  //     ofType(deleteLinkaccount),
  //     switchMap((action) =>{
  //       return this.UserLinkService.unlinkUser(action.body).pipe(
  //         map((data)=>{
  //           return deletecacheSuccess({cache: action.id});
  //         }),
  //       );
  //       }
  //     )
  //   )
  // })
  deleteLinkaccount$= createEffect(() => this.actions$.pipe(
    ofType(deleteLinkaccount),
          mergeMap((action) =>
        this.UserLinkService.unlinkUser(action.user).pipe(map(()=> {
        this.store.dispatch(getManageLinkedAccounts())
        }
      ),
    catchError((error)=> of())
  )
)
),
    {dispatch: false }
);
}