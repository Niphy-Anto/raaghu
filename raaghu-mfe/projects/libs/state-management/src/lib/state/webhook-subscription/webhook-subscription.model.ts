export interface WebhookSubscriptionItem {
    webhookUri: string;
    isActive:boolean;
  }
  
  export interface WebhookSubscriptionData {
    items: WebhookSubscriptionItem[]
  }
  
  