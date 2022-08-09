import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsLikeDislikeModule } from '@libs/rds-like-dislike';
import { RdsRatingModule } from '@libs/rds-rating';
import { RdsReviewCategoryComponent } from './rds-review-category.component';

@NgModule({
  declarations: [
    RdsReviewCategoryComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsRatingModule,
    RdsLikeDislikeModule,
    RdsAvatarModule
  ],
  exports: [
    RdsReviewCategoryComponent
  ]
})
export class RdsReviewCategoryModule { }
