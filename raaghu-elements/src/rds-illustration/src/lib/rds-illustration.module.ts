import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
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
