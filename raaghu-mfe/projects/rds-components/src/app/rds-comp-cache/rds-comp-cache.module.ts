import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompCacheComponent } from './rds-comp-cache.component';
import { RdsButtonModule, RdsIconModule, RdsPaginationModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompAlertPopupModule } from '../rds-comp-alert-popup/rds-comp-alert-popup.module';

@NgModule({
  declarations: [
    RdsCompCacheComponent
  ],
  imports: [
    CommonModule,
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
