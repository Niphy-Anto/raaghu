import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsFileUploaderComponent } from './rds-file-uploader.component';
import { RdsIconModule } from '@libs/rds-icon';

@NgModule({
  declarations: [
    RdsFileUploaderComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsFileUploaderComponent
  ]
})
export class RdsFileUploaderModule { }
