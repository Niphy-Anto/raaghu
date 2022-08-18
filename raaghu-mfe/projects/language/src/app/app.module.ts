import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsDropdownModule, RdsIconModule, RdsOffcanvasModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { LanguageEffects, LanguageReducer } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewlanguageComponent } from './newlanguage/newlanguage.component';
export const featureReducersMap = {
  languages: LanguageReducer,
 
};
@NgModule({
  declarations: [
    AppComponent,
    NewlanguageComponent
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    RdsOffcanvasModule,
    RdsButtonModule,
    RdsDropdownModule,
    RdsCheckboxModule,
    SharedModule,
    RdsDropdownlistModule,
    RdsSelectListModule,
    FormsModule,
    RdsFabMenuModule,
    RdsIconModule,
    NgxTranslateModule.forRoot(),

    StoreModule.forFeature('languages', featureReducersMap
    ),
    EffectsModule.forRoot([LanguageEffects]),
  ],
  // providers: [[HttpClient,

  //   { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestResponseInterceptor, multi: true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
