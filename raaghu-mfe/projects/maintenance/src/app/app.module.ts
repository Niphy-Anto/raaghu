import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsBadgeModule, RdsButtonModule, RdsIconModule, RdsModalModule, RdsNavTabModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { CacheComponent } from './cache/cache.component';
import { WebsitelogComponent } from './websitelog/websitelog.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { MaintenanceEffects, MaintenanceReducer, WebsitelogReducer } from '@libs/state-management';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { RdsMaintenanceShimmerComponent } from './maintenance/rds-maintenance-shimmer/rds-maintenance-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
export const MaintenanceReducersMap = {
  maintenances: MaintenanceReducer,
  Websitelogs: WebsitelogReducer,

};
@NgModule({
  declarations: [
    AppComponent,
    MaintenanceComponent,
    CacheComponent,
    WebsitelogComponent,
    RdsMaintenanceShimmerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RdsNavTabModule,RdsModalModule,RdsButtonModule,
    RdsBadgeModule,SharedModule,
    RdsIconModule,
    RdsFabMenuModule,
    NgxShimmerLoadingModule,
    StoreModule.forFeature('maintenances', MaintenanceReducersMap
    ),
    EffectsModule.forRoot([MaintenanceEffects]),
    NgxTranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
