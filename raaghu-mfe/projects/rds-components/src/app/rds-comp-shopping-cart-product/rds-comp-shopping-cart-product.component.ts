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
  @Input() itemList: ShoppingCartProduct[] = [
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Premium Quality Soft T-Shirt',
      prdosubname: 'Gray - medium',
      price: 12,
      ProductTotalPrice:12,
      quantity: [
        { value: 1, displayText: 'Qty 1' },
        { value: 2, displayText: 'Qty 2' },
        { value: 3, displayText: 'Qty 3' },
        { value: 4, displayText: 'Qty 4' },
        { value: 5, displayText: 'Qty 5' },
        { value: 6, displayText: 'Qty 6' },
        { value: 7, displayText: 'Qty 7' },
        { value: 8, displayText: 'Qty 8' },
        { value: 9, displayText: 'Qty 9' },
        { value: 10, displayText: 'Qty 10' }
      ],
      highlights: {
        icon: 'check_mark',
        label: 'In Stock'
      },

    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Premium Quality Soft T-Shirt',
      prdosubname: 'Black & White - Large',
      price: 33,
      ProductTotalPrice:33,
      quantity: [
        { value: 1, displayText: 'Qty 1' },
        { value: 2, displayText: 'Qty 2' },
        { value: 3, displayText: 'Qty 3' },
        { value: 4, displayText: 'Qty 4' },
        { value: 5, displayText: 'Qty 5' },
        { value: 6, displayText: 'Qty 6' },
        { value: 7, displayText: 'Qty 7' },
        { value: 8, displayText: 'Qty 8' },
        { value: 9, displayText: 'Qty 9' },
        { value: 10, displayText: 'Qty 10' }
      ],
      highlights: {
        icon: 'clock',
        label: 'Ships in 3-4 weeks'
      },

    }
    ,
    {
      id: 3,
      image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
      prodname: 'Premium Quality Soft T-Shirt',
      prdosubname: 'White - Small',
      price: 9,
      ProductTotalPrice:9,
      quantity: [
        { value: 1, displayText: 'Qty 1' },
        { value: 2, displayText: 'Qty 2' },
        { value: 3, displayText: 'Qty 3' },
        { value: 4, displayText: 'Qty 4' },
        { value: 5, displayText: 'Qty 5' },
        { value: 6, displayText: 'Qty 6' },
        { value: 7, displayText: 'Qty 7' },
        { value: 8, displayText: 'Qty 8' },
        { value: 9, displayText: 'Qty 9' },
        { value: 10, displayText: 'Qty 10' }
      ],
      highlights: {
        icon: 'check_mark',
        label: 'In Stock'
      },

    }

  ]
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





