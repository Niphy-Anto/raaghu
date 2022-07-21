import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLikeDislikeComponent } from './rds-like-dislike.component';

@NgModule({
  declarations: [
    RdsLikeDislikeComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsLikeDislikeComponent
  ]
})
export class RdsLikeDislikeModule { }
