import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


export interface OrderSummaryItems {
  name: string;
  price: number;
  // iconhide: boolean;
}
@Component({
  selector: 'rds-comp-order-summary',
  templateUrl: './rds-comp-order-summary.component.html',
  styleUrls: ['./rds-comp-order-summary.component.scss']
})

export class RdsCompOrderSummaryComponent implements OnInit {

  @Input() isCheckout = true;
  @Output()
  onItemClick = new EventEmitter<any>();
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  @Input() Subtotal: number = 0;
  @Input() Shippingestimate: number= 0;
  @Input() Taxestimate: number = 0;

  checkout() {
    this.onItemClick.emit(this.Subtotal + this.Shippingestimate + this.Taxestimate);
  }


}
