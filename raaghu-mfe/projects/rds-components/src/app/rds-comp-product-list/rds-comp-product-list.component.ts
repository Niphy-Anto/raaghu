import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rds-comp-product-list',
  templateUrl: './rds-comp-product-list.component.html',
  styleUrls: ['./rds-comp-product-list.component.scss']
})
export class RdsCompProductListComponent implements OnInit {

  constructor() { }

  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() role: 'withInlinePrice' | 'simple' = 'withInlinePrice';

  ngOnInit() {
  }

  @Input() withInlinePriceProductListItems: any[] = []
}
