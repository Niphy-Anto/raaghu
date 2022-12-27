import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPermissionTreeComponent } from './rds-comp-permission-tree.component';
import { SharedModule } from '@libs/shared';
import { RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompPermissionTreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RdsCheckboxModule,
    RdsInputModule
  ],
  exports: [
    RdsCompPermissionTreeComponent
  ]
})
export class RdsCompPermissionTreeModule { }
