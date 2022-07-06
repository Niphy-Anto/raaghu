import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, Subscription } from '../../app.interface';
import { SubscriptionInformationState, SubscriptionState } from './subscription.reducer';


//export const selectsubscriptions = (state: AppState) => state.Subscription;
export const selectsubscriptions = createFeatureSelector<AppState>(Subscription);
export const selectAllsubscription = createSelector(
    selectsubscriptions,
    (state: AppState) => state.Subscription
);
//export const selectsubscriptionInformation = (state: AppState) => state.SubscriptionInformation;
export const selectAllsubscriptionInformation = createSelector(
    selectsubscriptions,
    (state: AppState) => state.SubscriptionInformation
);