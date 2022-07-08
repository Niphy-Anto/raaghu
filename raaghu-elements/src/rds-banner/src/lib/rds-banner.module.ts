import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBannerComponent } from './rds-banner.component';

@NgModule({
  declarations: [
    RdsBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RdsBannerComponent
  ]
})
export class RdsBannerModule { }
