import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsProductImageModule } from 'src/root/public-api';
import { RdsCarouselComponent } from './rds-carousel.component';

@NgModule({
  declarations: [RdsCarouselComponent],
  imports: [CommonModule, RdsProductImageModule, RdsLabelModule, RdsIconModule],
  exports: [RdsCarouselComponent],
})
export class RdsCarouselModule {}
