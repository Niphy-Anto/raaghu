import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompCacheComponent } from './rds-comp-cache.component';
import { RdsCompCacheShimmerComponent } from './rds-comp-cache-shimmer/rds-comp-cache-shimmer.component';
import { RdsCompAlertPopupModule } from '../rds-comp-alert-popup/rds-comp-alert-popup.module'; 
import { RdsIconModule, RdsButtonModule, RdsPaginationModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompCacheComponent,
    RdsCompCacheShimmerComponent
  ],
  exports: [
    RdsCompCacheComponent
  ],
  imports: [
    CommonModule,
    RdsCompAlertPopupModule,
    RdsButtonModule,
    RdsPaginationModule,
    RdsIconModule,
    RdsCompAlertPopupModule,
    NgxTranslateModule
  ],
  exports:[
    RdsCompCacheComponent
  ]
})
export class RdsCompCacheModule { }
