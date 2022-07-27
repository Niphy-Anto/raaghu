import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { RdsFeedComponent } from './rds-feed.component';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsRatingModule } from '@libs/rds-rating';
import { RdsLikeDislikeModule } from '@libs/rds-like-dislike';

@NgModule({
  declarations: [
    RdsFeedComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RdsAvatarModule,
    RdsLabelModule,
    RdsLikeDislikeModule,
    RdsRatingModule,
    RdsIconModule
  ],
  exports: [
    RdsFeedComponent
  ]
})
export class RdsFeedModule { }
