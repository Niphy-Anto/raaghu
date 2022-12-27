import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { FormsModule } from '@angular/forms';
import { RdsCompClientAdvancedComponent } from './rds-comp-client-advanced.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';



@NgModule({
  declarations: [
    RdsCompClientAdvancedComponent
  ],
  imports: [
    CommonModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsButtonModule,
    RdsLabelModule,
    FormsModule,
    SharedModule,
    RdsDropdownlistModule,
    NgxTranslateModule,
    RdsCompDataTableModule
  ],
  exports: [
    RdsCompClientAdvancedComponent
  ]
})
export class RdsCompClientAdvancedModule { }
