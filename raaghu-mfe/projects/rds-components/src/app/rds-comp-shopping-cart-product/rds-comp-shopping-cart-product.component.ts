import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface ShoppingCartProduct {
  id: any;
  prodname: string;
  prdosubname: string;
  price: number;
  image: string;
  quantity: any;
  highlights: any;
  ProductTotalPrice:number;
}
@Component({
  selector: 'rds-comp-shopping-cart-product',
  templateUrl: './rds-comp-shopping-cart-product.component.html',
  styleUrls: ['./rds-comp-shopping-cart-product.component.scss']
})
export class RdsCompShoppingCartProductComponent implements OnInit {
  @Input() role: 'withoutQuantity' | 'basic' = 'basic';

  selctedValue: any;
  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
  }

  closedata?: number;
  @Input()
  value = '';
  onChange!: (value: any) => void;
  onTouched!: () => void
  selectedqty: any = 1;
  @Output() onReset = new EventEmitter<{ evnt: any }>();


  @Output() onChanges = new EventEmitter<{ event: any }>();

  @Output()
  onItemClick = new EventEmitter<{ qty: any }>();
  @Input() itemList: ShoppingCartProduct[] = [];
  closeFilterPermission(item: any, i: number): void {
    this.closedata = i;
    this.onReset.emit(item);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  onSelectValue(event:any,item:any) {
    this.selectedqty = event
    const data:any={
      id:item.id,
      highlights:item.highlights,
      image:item.image,
      prdosubname:item.prdosubname,
      price:item.price,
      prodname:item.prodname,
      quantity:event,
      ProductTotalPrice:item.ProductTotalPrice
    }
  
    this.onItemClick.emit(data);
  }


}
