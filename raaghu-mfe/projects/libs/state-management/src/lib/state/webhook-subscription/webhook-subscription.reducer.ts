import { createReducer, on } from "@ngrx/store";
import { getWebhookSubscription, getWebhookSubscriptionFailure, getWebhookSubscriptionSuccess } from "./webhook-subscription.action";
import { WebhookSubscriptionData } from "./webhook-subscription.model";


export interface WebhookSubscriptionState {
    webhookSubscriptions: WebhookSubscriptionData;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const subscriptionInitialState: WebhookSubscriptionState = {
    webhookSubscriptions: { items: [] },
    error: null,
    status: 'pending',
};
export const WebhookSubscriptionReducer = createReducer(
    // Supply the initial state
    subscriptionInitialState,
    on(getWebhookSubscription, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getWebhookSubscriptionSuccess, (state, { webhookSubscriptions }) => ({
        ...state,
        webhookSubscriptions: webhookSubscriptions,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getWebhookSubscriptionFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)