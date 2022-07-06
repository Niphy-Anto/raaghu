import { createAction, props } from "@ngrx/store";
import { Subscription, SubscriptionInformation } from "./subscription.models";

export const getsubscription = createAction('[subscription Page] Get subscription');

export const getsubscriptionSuccess = createAction(
    '[subscription Page] Get subscription Success',
    props<{ Subscription: Subscription }>()
);

export const getsubscriptionFailure = createAction(
    '[subscription Page] Get subscription Failure',
    props<{ error: string }>()
);

export const getsubscriptioninformation = createAction('[subscriptioninformation Page] Get subscriptioninformation');

export const getsubscriptioninformationSuccess = createAction(
    '[subscriptioninformation Page] Get subscriptioninformation Success',
    props<{ SubscriptionInformation: any }>()
);

export const getsubscriptioninformationFailure = createAction(
    '[subscriptioninformation Page] Get subscriptioninformation Failure',
    props<{ error: string }>()
);