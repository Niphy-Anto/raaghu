import { createAction, props } from "@ngrx/store";
import { WebhookSubscription } from "projects/libs/shared/src/lib/service-proxies";
import {  WebhookSubscriptionData } from "./webhook-subscription.model";

export const getWebhookSubscription = createAction('[Webhook Subscription Page] Get Webhook Subscriptions');

export const getWebhookSubscriptionSuccess = createAction(
    '[Webhook Subscription  Page] Get Webhook Subscription  Success',
    props<{ webhookSubscriptions: WebhookSubscriptionData }>()
);

export const getWebhookSubscriptionFailure = createAction(
    '[Webhook Subscription  Page] Get Webhook Subscription  Failure',
    props<{ error: string }>()
);

export const saveWebhookSubscription = createAction(
    '[Webhook Subscription  Page] Save Webhook Subscription',
    (webhookInfo:WebhookSubscription) => ({ webhookInfo })
);