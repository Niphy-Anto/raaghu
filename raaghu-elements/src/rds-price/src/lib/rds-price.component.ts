import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rds-price',
  templateUrl: './rds-price.component.html',
  styleUrls: ['./rds-price.component.scss']
})
export class RdsPriceComponent implements OnInit, OnChanges {
  @Input() discount: number = 0;
  @Input() actualPrice: number = 0;
  @Input() withDiscount: boolean = true;
  // withDiscountPrice?:number;
  numberPrice?: number = 0;

  constructor() { }
  ngOnChanges(): void {
  }

  ngOnInit(): void {

  }

  calculateprice() {
    if (this.withDiscount) {
      return this.actualPrice - ((this.actualPrice * this.discount) / 100);
    }
    return this.actualPrice;
    //  this.numberPrice = this.withDiscountPrice ;

  }
}
