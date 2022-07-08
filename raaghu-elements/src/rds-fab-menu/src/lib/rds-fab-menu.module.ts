import { NgModule } from '@angular/core';
import { RdsFabMenuComponent } from './rds-fab-menu.component';

import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    RdsFabMenuComponent
  ],
  imports: [
    RdsIconModule,
    CommonModule
  ],
  exports: [
    RdsFabMenuComponent,
  ]
})
export class RdsFabMenuModule { }
