import { NgModule } from '@angular/core';
import { RdsFabMenuComponent } from './rds-fab-menu.component';
import { RdsIconModule } from '@libs/rds-icon';
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
