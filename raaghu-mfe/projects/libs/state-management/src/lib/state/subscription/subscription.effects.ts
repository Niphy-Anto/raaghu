import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PaymentServiceProxy,SessionServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { getsubscriptionFailure, getsubscription, getsubscriptionSuccess,
  getsubscriptioninformation,getsubscriptioninformationSuccess,getsubscriptioninformationFailure } from "./subscription.actions";


@Injectable()
export class SubscriptionEffects {
    constructor(private actions$: Actions, private subscriptionService: PaymentServiceProxy,private sessionservice: SessionServiceProxy) { }
    getLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getsubscription),
      switchMap(() =>
    
        from(this.subscriptionService.getPaymentHistory("",10,20)).pipe(
        
          map((Subscription) => {
              return getsubscriptionSuccess({ Subscription: Subscription })
            }),
    
          catchError((error) => of(getsubscriptionFailure({ error })))
        )
      )
    )
  );
  grtsubscriptionInformation$= createEffect(() =>
  this.actions$.pipe(
    ofType(getsubscriptioninformation),
    switchMap(() =>
  
      from(this.sessionservice.getCurrentLoginInformations()).pipe(
      
        map((SubscriptionInformation) => {
            return getsubscriptioninformationSuccess({ SubscriptionInformation:SubscriptionInformation })
          }),
  
        catchError((error) => of(getsubscriptioninformationFailure({ error })))
      )
    )
  )
);
}