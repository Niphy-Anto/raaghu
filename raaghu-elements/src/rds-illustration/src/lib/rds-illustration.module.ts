import { NgModule } from '@angular/core';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';
import { RdsIllustrationComponent } from './rds-illustration.component';

@NgModule({
  declarations: [
    RdsIllustrationComponent
  ],
  imports: [
    RdsIconModule
  ],
  exports: [
    RdsIllustrationComponent
  ]
})
export class RdsIllustrationModule { }
