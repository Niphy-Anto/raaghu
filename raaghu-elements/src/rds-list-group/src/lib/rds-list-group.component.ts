import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-list-group',
  templateUrl: './rds-list-group.component.html',
  styleUrls: ['./rds-list-group.component.scss']
})
export class RdsListGroupComponent implements OnInit {

  title = 'rds-list-group';
  public selectdataItem: selectedData = [];

  isMasterSel?: boolean;

  @Output() onClick = new EventEmitter<any>();

  @Input()
  list!: TemplateRef<any>;
  @Input() listItem: any[] = [];

  @Input() multiSelect?: boolean;

  selected: any;

  ngOnInit(): void {

  }

  selectedData(item: any) {
    this.selected = item.label;
    this.selectdataItem = [{
      label: this.selected
    }]
    this.onClick.emit(this.selectdataItem);
  }

  activeProject(item: any) {
    if (!this.multiSelect) {
      for (var i = 0; i < this.listItem.length; i++) {
        this.listItem[i].isActive = false;
      }
    }
    item.isActive = !item.isActive;
  }

}

export class selectedData {
  constructor(
    label: string
  ) { }

}
