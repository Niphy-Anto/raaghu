import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-table',
  templateUrl: './rds-table.component.html',
  styleUrls: ['./rds-table.component.scss']
})
export class RdsTableComponent implements OnInit {

  @Input()
  tableBorder?: boolean;

  @Input()
  tableHeader?: boolean;

  @Input()
  tableHeaderItems: any[] = [
      { displayName: 'Name', dataType: 'text' },
      { displayName: 'Place', dataType: 'icon' },
      { displayName: 'Price', dataType: 'price' }
  ];

  @Input()
  tableBodyItems: any[] =
    [{ id: 1, name: 'Standard', icon: 'tickmark' },
    ];

  @Input()
  colorVariant?: string;


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

  public get hideHeader(): string[] {
    var bodyClass = ['']
    if (this.tableHeader === true) {
      bodyClass.push('d-none')
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
