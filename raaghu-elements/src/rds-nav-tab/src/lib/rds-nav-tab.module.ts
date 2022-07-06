import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsNavTabComponent } from './rds-nav-tab.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';

@NgModule({
  declarations: [
    RdsNavTabComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsNavTabComponent
  ]
})
export class RdsNavTabModule { }
