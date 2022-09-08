import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { RdsCookieConsentService } from 'projects/libs/rds-cookieconsent/src/lib/service/cookieconsent.service';
import { RdsInitializingEvent } from 'projects/libs/rds-cookieconsent/src/lib/event/initializing.event';
import { RdsInitializationErrorEvent } from 'projects/libs/rds-cookieconsent/src/lib/event/initialization-error.event';
import { RdsStatusChangeEvent } from 'projects/libs/rds-cookieconsent/src/lib/event/status-change.event';
import { RdsNoCookieLawEvent } from 'projects/libs/rds-cookieconsent/src/lib/event/no-cookie-law.event';
import { RdsCookieConsentConfig } from 'projects/libs/rds-cookieconsent/src/lib/service/cookieconsent-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(public translate: TranslateService, private store: Store, private ccService: RdsCookieConsentService) { }

  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializingSubscription!: Subscription;
  private initializedSubscription!: Subscription;
  private initializationErrorSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;


  ngOnInit() {
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // this.ccService.getConfig().content = this.ccService.getConfig().content || {};
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.initializingSubscription = this.ccService.initializing$.subscribe(
      (event: RdsInitializingEvent) => {
        // the cookieconsent is initilializing... Not yet safe to call methods like `RdsCookieConsentService.hasAnswered()`
        console.log(`initializing: ${JSON.stringify(event)}`);
        console.log('cookie config ', this.ccService.getConfig());
      });

    this.initializedSubscription = this.ccService.initialized$.subscribe(
      () => {
        // the cookieconsent has been successfully initialized.
        // It's now safe to use methods on RdsCookieConsentService that require it, like `hasAnswered()` for eg...
        console.log(`initialized: ${JSON.stringify(event)}`);
        console.log('cookie config ', this.ccService.getConfig());
      });

    this.initializationErrorSubscription = this.ccService.initializationError$.subscribe(
      (event: RdsInitializationErrorEvent) => {
        // the cookieconsent has failed to initialize... 
        console.log(`initializationError: ${JSON.stringify(event.error?.message)}`);
      });

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: RdsStatusChangeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: RdsNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });
  }

  

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializingSubscription.unsubscribe();
    this.initializedSubscription.unsubscribe();
    this.initializationErrorSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}







