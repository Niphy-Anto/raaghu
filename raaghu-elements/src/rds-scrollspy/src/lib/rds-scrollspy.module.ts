import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsScrollspyComponent } from './rds-scrollspy.component';
import { ScrollspyItemComponent } from './scrollspy-item/scrollspy-item.component';

@NgModule({
  declarations: [
    RdsScrollspyComponent,
    ScrollspyItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RdsScrollspyComponent,
    ScrollspyItemComponent
  ]
})
export class RdsScrollspyModule { }
