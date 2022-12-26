import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompSecretsComponent } from './rds-comp-secrets.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsDatepickerModule, RdsDropdownlistModule, RdsInputModule } from '@libs/rds-elements';
import { RdsIconModule } from '@libs/rds-icon';
import { FormsModule } from '@angular/forms';
import { RdsLabelModule } from '@libs/rds-label';



@NgModule({
  declarations: [
    RdsCompSecretsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RdsInputModule,
    RdsButtonModule,
    NgxTranslateModule,
    RdsIconModule,
    FormsModule,
    RdsDatepickerModule,
    RdsDropdownlistModule,
    RdsLabelModule
  ],
  exports: [
    RdsCompSecretsComponent
  ]
})
export class RdsCompSecretsModule { }
