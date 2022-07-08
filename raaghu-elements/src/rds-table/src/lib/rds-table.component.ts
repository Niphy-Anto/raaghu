import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-table',
  templateUrl: './rds-table.component.html',
  styleUrls: ['./rds-table.component.scss']
})
export class RdsTableComponent implements OnInit {

  @Input()
  hover = false;

  @Input()
  border = false;

  @Input()
  stripe = false;

  //@Input()
  //darkmode = false;

  @Input()
  tableItems: any = [{ name: "xyz", age: 25, state: "Maharashtra" }, { name: "yz", age: 21, state: "Hariyana" }, { name: "op", age: 41, state: "Surat" }]

  @Input()
  thead!: TemplateRef<any>;

  @Input()
  tbody!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {

    var classes = ['table']
    if (this.hover === true) {
      classes = ['table-hover'];
    }

    if (this.border === true) {
      classes.push('table-bordered')
    }

    if (this.stripe === true) {
      classes.push('table-striped')
    }

    return classes
  }
}
