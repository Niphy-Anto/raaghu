import { NgModule } from '@angular/core';
import { RdsBannerModule, RdsButtonModule, RdsIconModule, RdsInputModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { RdsWebhooksSubscriptionShimmerComponent } from './rds-webhooks-subscription-shimmer/rds-webhooks-subscription-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { CommonModule } from '@angular/common';
import { RdsCompWebhookSubscriptionModule } from 'projects/rds-components/src/app/rds-comp-webhook-subscription/rds-comp-webhook-subscription.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompAlertPopupModule } from 'projects/rds-components/src/app/rds-comp-alert-popup/rds-comp-alert-popup.module';


@NgModule({
  declarations: [
    AppComponent,
    RdsWebhooksSubscriptionShimmerComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsFabMenuModule,
    RdsTextareaModule,
    RdsOffcanvasModule,
    RdsIconModule,
    SharedModule,
    RdsBannerModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsCompWebhookSubscriptionModule,
    RdsCompDataTableModule,
    RdsCompAlertPopupModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
