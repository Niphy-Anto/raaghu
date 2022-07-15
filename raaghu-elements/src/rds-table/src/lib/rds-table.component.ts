import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-table',
  templateUrl: './rds-table.component.html',
  styleUrls: ['./rds-table.component.scss']
})
export class RdsTableComponent implements OnInit {

  //@Input()
  //hover = false;

  @Input()
  tableBorder = false;

  //@Input()
  //stripe = false;

  //@Input()
  //darkmode = false;

  @Input()
  tableHeaderItems: any = [
    { headerName: "Name" },
    { headerName: "Age" },
    { headerName: "State" }
  ];

  @Input()
  tableBodyItems: any =
    [{
      name: "xyz",
      age: 25,
      state: "Maharashtra"
    },
    {
      name: "yz",
      age: 21,
      state: "Hariyana"
    },
    {
      name: "op",
      age: 41,
      state: "Surat"
    }
    ];

  @Input()
  colorVariant?: string;

  //@Input()
  //tableItems: any = [{ name: "xyz", age: 25, state: "Maharashtra" }, { name: "yz", age: 21, state: "Hariyana" }, { name: "op", age: 41, state: "Surat" }]

  //@Input()
  //thead!: TemplateRef<any>;

  //@Input()
  //tbody!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  public get bodyColorClasses(): string[] {
    var bodyClass = ['table table-responsive table-' + `${this.colorVariant}`]
    if (this.tableBorder === true) {
      bodyClass.push('table-bordered')
    }
    return bodyClass;
  }

  //public get classes(): string[] {

  //  var classes = ['table']
  //  if (this.hover === true) {
  //    /* classes = ['table-hover'];*/
  //    classes.push('table-hover');     
  //  }
  //  if(this.border === true) {
  //    classes.push('table-bordered')
  //  }
  //  else if(this.stripe === true) {
  //    classes.push('table-striped')
  //  }

  //  return classes;
  //}
}
