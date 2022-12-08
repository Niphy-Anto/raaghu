import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsUserDelegationsComponent } from './rds-comp-user-delegations.component';
import { RdsButtonModule, RdsDatepickerModule, RdsDropdownlistModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';



@NgModule({
  declarations: [RdsUserDelegationsComponent],
  exports:[RdsUserDelegationsComponent],
  imports: [
    CommonModule,
    RdsButtonModule,
    RdsDropdownlistModule,
    RdsDatepickerModule,
    RdsCompDataTableModule,
    
  ]
})
export class RdsCompUserDelegationsModule { }
