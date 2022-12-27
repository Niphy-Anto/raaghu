import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from '../../models/table-header.model';

export class Properties {
  public key: any;
  public value: any;


}
@Component({
  selector: 'rds-comp-properties',
  templateUrl: './rds-comp-properties.component.html',
  styleUrls: ['./rds-comp-properties.component.scss']
})
export class RdsCompPropertiesComponent implements OnInit {

  constructor() { }
  key: string;
  value: string;
  @Input() PropertyTableData: any = []
  @Input() PropertyList: any = [];
  @Output()
  onPropertyResourceSave = new EventEmitter<{ Property: any }>()
  rdsresourceTableMfeConfig: ComponentLoaderOptions;
  @Input() PropertiesData: Properties = {
    key: undefined,
    value: undefined
  }
  @Input() PropertyTableHeader: TableHeader[] = [
    { displayName: 'Key', key: 'key', dataType: 'text', dataLength: 30, sortable: false, required: true },
    { displayName: 'Value', key: 'value', dataType: 'text', dataLength: 30, sortable: false, required: true },
  ]

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.PropertiesData) {

      this.PropertiesData['key'] = '';
      this.PropertiesData['value'] = '';

    }
  }
  ngOnInit(): void {
    this.rdsresourceTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.PropertyTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.PropertyList,
        recordsPerPage: 10,

      },
      output: {


      }
    };
  }
  addProperties() {
    const data: any = { ...this.PropertiesData };
    this.PropertyList.push(data)
    // this.PropertiesData = {
    //   key: '',
    //   value: ''
    // }
    console.log(this.PropertiesData);

  }
  SavePropertyData() {
    this.onPropertyResourceSave.emit({ Property: this.PropertyList });
    console.log({ Property: this.PropertyList });


  }
}
