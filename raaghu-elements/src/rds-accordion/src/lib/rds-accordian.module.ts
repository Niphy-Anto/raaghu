import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsAccordionComponent } from './rds-accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    RdsAccordionComponent,
    AccordionItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsAccordionComponent,
    AccordionItemComponent
  ]
})
export class RdsAccordionModule { }
