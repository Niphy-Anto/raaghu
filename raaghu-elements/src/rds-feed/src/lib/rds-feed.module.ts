import { NgModule } from '@angular/core';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsAvatarModule } from '@libs/rds-avatar';
 import { RdsLikeDislikeModule } from '@libs/rds-like-dislike';
import { RdsFeedComponent } from './rds-feed.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RdsIconModule } from '@libs/rds-icon';
import { RdsRatingModule } from '@libs/rds-rating';




@NgModule({
  declarations: [
    RdsFeedComponent
  ],
  imports: [
    RdsAvatarModule,
    RdsLabelModule,
    RdsLikeDislikeModule,
    FormsModule,
    CommonModule,
    RdsRatingModule,
    RdsIconModule
  ],
  exports: [
    RdsFeedComponent
    
  ]
})
export class RdsFeedModule { }
