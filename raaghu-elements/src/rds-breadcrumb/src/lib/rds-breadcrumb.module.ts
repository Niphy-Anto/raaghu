import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBreadcrumbComponent } from './rds-breadcrumb.component';
import { RdsIconModule } from '@libs/rds-icon';
@NgModule({
  declarations: [
    RdsBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsBreadcrumbComponent
  ]
})
export class RdsBreadcrumbModule { }
