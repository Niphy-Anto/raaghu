import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { WebhookSubscriptionState } from './webhook-subscription.reducer';

export const select = (state: AppState) => state.webhookSubscriptions;
export const selectAll = createSelector(
    select,
    (state: WebhookSubscriptionState) => state.webhookSubscriptions
);