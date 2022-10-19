import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsAvatarModule } from 'rds-elements/rds-avatar/lib/rds-avatar.module';
import { RdsIconModule } from 'rds-elements/rds-icon/lib/rds-icon.module';
import { RdsLabelModule } from 'rds-elements/rds-label/lib/rds-label.module';
import { RdsLikeDislikeModule } from 'rds-elements/rds-like-dislike/lib/rds-like-dislike.module';
import { RdsRatingModule } from 'rds-elements/rds-rating/lib/rds-rating.module';
import { RdsReviewCategoryComponent } from './rds-review-category.component';

@NgModule({
  declarations: [
    RdsReviewCategoryComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
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
