import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RdsCarouselComponent } from './rds-carousel.component';

@NgModule({
  declarations: [RdsCarouselComponent],
  imports: [FormsModule, CommonModule],
  exports: [RdsCarouselComponent],
})
export class RdsCarouselModule {}
