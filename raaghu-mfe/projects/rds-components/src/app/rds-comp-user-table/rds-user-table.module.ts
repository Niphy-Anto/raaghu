import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompUserTableComponent } from './rds-comp-user-table.component';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RdsCompUserTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsCompDataTableModule
  ],
  exports: [
    RdsCompUserTableComponent
  ]
})
export class RdsUserTableModule { }
