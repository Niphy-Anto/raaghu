import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompWebhookSubscriptionComponent } from './rds-comp-webhook-subscription.component';
import { RdsButtonModule, RdsInputModule, RdsTextareaModule } from '@libs/rds-elements';



@NgModule({
  declarations: [RdsCompWebhookSubscriptionComponent],
  imports: [
    CommonModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsButtonModule
  ],
  exports: [RdsCompWebhookSubscriptionComponent]
})
export class RdsCompWebhookSubscriptionModule { }
