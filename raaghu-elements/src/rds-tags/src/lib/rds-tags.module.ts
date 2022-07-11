import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsTagsComponent } from './rds-tags.component';

@NgModule({
  declarations: [
    RdsTagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsTagsComponent
  ]
})
export class RdsTagsModule { }
