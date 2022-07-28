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

  @Output()
  onItemClick = new EventEmitter<any>();
  constructor(public translate: TranslateService) { }


  ngOnInit(): void {
  }


  @Input() itemList: OrderSummaryItems[] = [
    { name: 'Subtotal', price: 300.00 },
    { name: 'Shipping estimate', price: 9.20 },
    { name: 'Tax estimate', price: 2.30 }
  ]
  // { name: 'Subtotal', price: 300.00, iconhide: true },
  // { name: 'Shipping estimate', price: 9.20, iconhide: false },
  // { name: 'Tax estimate', price: 2.30, iconhide: false }

  orderTotal: number;

  count(itemList) {
    var total = 0;

    for (var i = 0; i < itemList.length; i++) {
      total += parseFloat(itemList[i].price);
    }

    console.log(total);
    this.orderTotal = total;
    return this.orderTotal;


  }

  checkout(e: any) {
    this.onItemClick.emit(this.orderTotal);
  }




}
