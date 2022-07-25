import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbsItems } from '@libs/rds-elements';

@Component({
  selector: 'app-rds-comp-product-overview',
  templateUrl: './rds-comp-product-overview.component.html',
  styleUrls: ['./rds-comp-product-overview.component.scss']
})
export class RdsCompProductOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumbsitems: BreadcrumbsItems[] = [];
  // breadcrumbsitems: BreadcrumbsItems[] = [];
@Input() productType: 'producroverview1' | 'producroverview2'| 'producroverview3' | 'producroverview4' = 'producroverview1';


 @Input() producroverview1 = [
  {
        name: 'Men',
        route: '/men',
        iconClass: 'bi bi-house-door',
      },
      {
        name: 'Clothing',
        route: '/clothing',
        iconClass: 'bi bi-house-door',
      },
      {
        name: 'Basic Tee 6-Pack',
        route: '/basic-tee-6-pack',
        iconClass: 'bi bi-house-door',
      },
 ];
 @Input() producroverview2 = [
  {
        name: 'Women',
        route: '/Women',
        iconClass: 'bi bi-house-door',
      },
      {
        name: 'Clothing',
        route: '/clothing',
        iconClass: 'bi bi-house-door',
      },
      {
        name: 'Basic Tee',
        route: '/basic-tee',
        iconClass: 'bi bi-house-door',
      },
 ];
 @Input() producroverview4 = [
  {
    name: 'Travel',
    route: '/Travel',
    iconClass: 'bi bi-house-door',
  },
  {
    name: 'Bags',
    route: '/Bags',
    iconClass: 'bi bi-house-door',
  },{
    name: 'Travel',
    route: '/Travel',
    iconClass: 'bi bi-house-door',
  },
  {
    name: 'Bags',
    route: '/Bags',
    iconClass: 'bi bi-house-door',
  },
 ];
 listItems: []=[];
 itemList: []

}
