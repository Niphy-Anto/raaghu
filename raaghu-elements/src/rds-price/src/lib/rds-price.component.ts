import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rds-price',
  templateUrl: './rds-price.component.html',
  styleUrls: ['./rds-price.component.scss']
})
export class RdsPriceComponent implements OnInit ,OnChanges{
  @Input() discount: number =0;
  @Input() actualPrice: number =0;
  @Input() role: string;
  // @Input() numberPricetwo: number =0; 
  withDiscountPrice?:number;
  numberPrice?:number;
  @Input() numberPricetwo?: number;
  
  constructor() { }
  ngOnChanges(): void {
    this.calculateprice();
  }

  ngOnInit(): void {
    
  }
 
calculateprice(){

  this.numberPrice=this.actualPrice-((this.actualPrice * this.discount)/100);
//  this.numberPrice = this.withDiscountPrice ;

}
}
