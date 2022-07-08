import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsAlertModule, RdsBannerModule, RdsButtonModule, RdsIconModule, RdsInputModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebhooksubscriptionComponent } from './webhooksubscription/webhooksubscription.component';
import { StoreModule } from '@ngrx/store';
import { WebhookSubscriptionEffects, WebhookSubscriptionReducer } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
    WebhooksubscriptionComponent,

  ],
  imports: [
    BrowserModule,
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
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('webhookSubscriptions', {
      webhookSubscriptions: WebhookSubscriptionReducer
    }),
    EffectsModule.forRoot([WebhookSubscriptionEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
