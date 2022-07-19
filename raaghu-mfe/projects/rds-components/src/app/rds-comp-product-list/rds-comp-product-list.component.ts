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

  ngOnInit() {
  }

  Data: any []= [{
    "title": "Basic Tee",
    "subTitle": "White",
    "price": "$35",
    "badgeLabel":"Quality Assured"
 },
 {
  "title": "Basic Tee 2",
  "subTitle": "White 2",
  "price": "$40",
  "badgeLabel":""
},
{
  "title": "Basic Tee 3",
  "subTitle": "White 3",
  "price": "$45",
  "badgeLabel":"Quality Assured"
}]

}
