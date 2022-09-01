import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rds-comp-open-position',
  templateUrl: './rds-comp-open-position.component.html',
  styleUrls: ['./rds-comp-open-position.component.scss']
})
export class RdsCompOpenPositionComponent implements OnInit {
  @Input() itemList: any[] = []
  navtabsItems: any = [];
  discription: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
