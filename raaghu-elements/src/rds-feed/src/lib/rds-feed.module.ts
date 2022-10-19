import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RdsFeedComponent } from './rds-feed.component';
import { RdsAvatarModule } from 'rds-elements/rds-avatar/lib/rds-avatar.module';
import { RdsLikeDislikeModule } from 'rds-elements/rds-like-dislike/lib/rds-like-dislike.module';
import { RdsRatingModule } from 'rds-elements/rds-rating/lib/rds-rating.module';
import { RdsIconModule } from 'rds-elements/rds-icon/lib/rds-icon.module';
import { RdsLabelModule } from 'rds-elements/rds-label/lib/rds-label.module';

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
