import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MultipleMfeComponent } from './multiple-mfe/multiple-mfe.component';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule, UserAuthModule, NgxTranslateModule, API_BASE_URL } from '@libs/shared';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DatePipe } from '@angular/common';
import {
  LanguageEffects, ProductEffects, productReducer, DynamicEntityEffects, DynamicEntityReducer,
  DynamicPropertyEffects, DynamicPropertyReducer, ProfileEffects, ProfileReducer, WebhookSubscriptionEffects,
  LoginEffects, ValidateTenantReducer,
  OrganizationUnitReducer, OrganizationUnitEffects, MLAReducer, MLAEffects,
  MaintenanceEffects, ManageLinkedAccountsEffects, LoginAttemptsEffects,
  DelegationsReducer, DelegationsEffects, GetAllDynamicProperty, GetAllDynamicPropertyEntites,
  GetInputnameReducer, getDynamicPropertyByEditReducer, DynamicPermissionReducer,
  GetUsernameFilterReducer, LoginAttemptsReducer, LanguageReducer, CountryListReducer, DefaultLanguageReducer,downloadReducer,DownloadEffects

} from '@libs/state-management';
import { LanguageTextEffects } from 'projects/libs/state-management/src/lib/state/language-text/language-text.effects';
import { RdsSideNavModule } from '@libs/rds-elements';
import { LanguageTextReducer } from 'projects/libs/state-management/src/lib/state/language-text/language-text.reducer';
import demodata from '../assets/appconfig.json';
export function getRemoteServiceBaseUrl(): any {
  let URL=demodata.remoteServiceBaseUrl
  return URL;
  }
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forRoot({
      products: productReducer,
      dynamicProperty: DynamicPropertyReducer,
      dynamicEntity: DynamicEntityReducer,
      profile: ProfileReducer,
      Entities: GetAllDynamicProperty,
      PropertiesEntitie: GetAllDynamicPropertyEntites,
      organizationUnit: OrganizationUnitReducer,
      Delegation: DelegationsReducer,
      mla: MLAReducer,
      validateTenant: ValidateTenantReducer,
      InputTypeNames: GetInputnameReducer,
      EditDynamicPropertSateI: getDynamicPropertyByEditReducer,
      DynanmicPermission: DynamicPermissionReducer,
      usernames: GetUsernameFilterReducer,
      loginAttempts: LoginAttemptsReducer,
      languages: LanguageReducer,
      countries: CountryListReducer,
      languageText: LanguageTextReducer,
      defaultLanguage: DefaultLanguageReducer,
      downloadData:downloadReducer
    }),
    
    StoreDevtoolsModule.instrument({
      name: 'Raaghu MFE',
      logOnly: false,
    }),
    EffectsModule.forRoot([ProductEffects, LoginAttemptsEffects, MLAEffects,
      LanguageEffects, ManageLinkedAccountsEffects, DynamicPropertyEffects,
      DynamicEntityEffects, ProfileEffects,
      OrganizationUnitEffects, MaintenanceEffects, DelegationsEffects, LoginEffects, LanguageTextEffects,DownloadEffects
    ]),
    SharedModule,
    UserAuthModule,
    BrowserAnimationsModule,
    RdsSideNavModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MultipleMfeComponent,
    SidenavComponent,
  ],

  providers: [
    DatePipe,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

