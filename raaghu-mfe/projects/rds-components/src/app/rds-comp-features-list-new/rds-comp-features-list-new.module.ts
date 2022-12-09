import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompFeaturesListNewComponent } from './rds-comp-features-list-new.component';
import { RdsButtonModule, RdsCardModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompEditionNewBasicModule } from '../rds-comp-edition-new-basic/rds-comp-edition-new-basic.module';
import { RdsCompEditionNewFeaturesModule } from '../rds-comp-edition-new-features/rds-comp-edition-new-features.module';
import { RdsCompAlertPopupModule } from '../rds-comp-alert-popup/rds-comp-alert-popup.module';


@NgModule({
  declarations: [
    RdsCompFeaturesListNewComponent
  ],
  exports: [
    RdsCompFeaturesListNewComponent
  ],
  imports: [
    CommonModule,
    RdsCompAlertPopupModule,
    RdsCompEditionNewBasicModule,
    RdsCompEditionNewFeaturesModule,
    RdsButtonModule,
    RdsCardModule,
    RdsLabelModule,
    RdsOffcanvasModule,
    RdsNavTabModule
  ]
})
export class RdsCompFeaturesListNewModule { }
