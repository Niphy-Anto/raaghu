import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rds-comp-open-position',
  templateUrl: './rds-comp-open-position.component.html',
  styleUrls: ['./rds-comp-open-position.component.scss']
})
export class RdsCompOpenPositionComponent implements OnInit {
  @Input() item: any;  
  activePage: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  getSelectedNavTab(selectedIndex:any): void {
    this.activePage = selectedIndex
  }

  getJobList(selectedId: string): any {
    if (!this.item) {
      return [];
    }
    if (selectedId === 'developer') {
      return this.item.descriptions;
    }
    return this.item.descriptions.filter((x: any) => x.type === selectedId);
  }

}
