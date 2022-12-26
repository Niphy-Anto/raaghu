import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

export interface ResourceCheckboxes {
  id: any;
  letterRange: string;
  isAllRangeSelected: boolean;
  resourcesData: ResourceData[];
}

export interface ResourceData {
  displayName: string;
  left: boolean;
  id?: string;
  name?: string;
}

export interface TypeData {
  id: any;
  value: any;
  some: any;
}

@Component({
  selector: 'rds-comp-client-resources',
  templateUrl: './rds-comp-client-resources.component.html',
  styleUrls: ['./rds-comp-client-resources.component.scss']
})
export class RdsCompClientResourcesComponent implements OnInit, OnChanges {

  // Input Decorators
  @Input() showType: boolean = false;
  @Input() typeData: TypeData[] = [];
  @Input() resourceData: ResourceData[] = [];

  // Output Decorators
  @Output() onOptionSelection = new EventEmitter<any>();
  @Output() selectedData = new EventEmitter<any>();

  // Properties
  showSelectAllCheckbox = false;
  selectAll: boolean;
  finalResourceData: ResourceCheckboxes[] = [];

  constructor(public translate: TranslateService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.showType && this.resourceData.length > 0) this.selectedOptionData(this.resourceData);
  }

  ngOnInit(): void {
    if (!this.showType && this.resourceData.length > 0) this.selectedOptionData(this.resourceData);
  }

  // Selected Value from dropdown
  selectedOption(data: any) {
    this.onOptionSelection.next(data);
  }

  // Sorting of data
  selectedOptionData(data: ResourceData[]) {
    let resourcesData: ResourceData[] = [];
    resourcesData = data;
    if (resourcesData.length > 0) {
      resourcesData.filter(x => x.left == false).length > 0 ? this.selectAll = false : this.selectAll = true;
      resourcesData.sort((a, z) => {
        const firstLetter = a.displayName.toLowerCase();
        const lastLetter = z.displayName.toLowerCase();
        if (firstLetter < lastLetter) return -1;
        if (firstLetter > lastLetter) return 1;
        return 0;
      });
      this.finalResourceData = [
        { id: 1, letterRange: 'A-E', isAllRangeSelected: false, resourcesData: [] },
        { id: 2, letterRange: 'F-O', isAllRangeSelected: false, resourcesData: [] },
        { id: 3, letterRange: 'P-Z', isAllRangeSelected: false, resourcesData: [] }
      ];
      let firstIndex: number = 0;
      for (let i = 0; i < this.finalResourceData.length; i++) {
        const asciiValue = i == 0 ? 102 : i == 1 ? 112 : i == 2 ? 123 : 123;
        const sortedValues = resourcesData.filter(x => x.displayName.toLowerCase().charCodeAt(0) < asciiValue);
        if (sortedValues != undefined) {
          const lastIndex = resourcesData.indexOf(sortedValues.pop(), 0);
          const sortedAlphaArray = resourcesData.slice(firstIndex, lastIndex + 1);
          this.finalResourceData[i].resourcesData = this.finalResourceData[i].resourcesData.concat(sortedAlphaArray);
          firstIndex = lastIndex + 1;
          this.showSelectAllCheckbox = true;
          this.onSelectChild(i);
        } else this.showSelectAllCheckbox = false;
      }
      this.emitSelectedData();
    }
  }

  // Select All Data
  selectAllItems(event: any) {
    for (let i = 0; i < this.finalResourceData.length; i++) {
      this.finalResourceData.forEach(element => element.isAllRangeSelected = event.target.checked);
      this.selectAllSectionItems(event, i);
    }
    this.emitSelectedData();
  }

  // Select all data in a section
  selectAllSectionItems(event: any, index: number) {
    this.finalResourceData[index].resourcesData.forEach(element => element.left = event.target.checked);
    this.onChildCheckboxCheck(index);
    this.emitSelectedData();
  }

  // Select Particular checkbox
  onSelectChild(parentIndex: number) {
    this.onChildCheckboxCheck(parentIndex);
    this.emitSelectedData();
  }

  onChildCheckboxCheck(index: number) {
    if (this.finalResourceData[index].resourcesData.filter(x => x.left == false).length > 0) {
      this.selectAll = false;
      this.finalResourceData[index].isAllRangeSelected = false;
    } else {
      this.selectAll = true;
      this.finalResourceData[index].isAllRangeSelected = true;
    }
  }

  // Emit Selected Data
  emitSelectedData() {
    const selectedData: any[] = [];
    for (let i = 0; i < this.finalResourceData.length; i++) {
      this.finalResourceData[i].resourcesData.filter(x => x.left == true).forEach(ele => {
        const item = {
          displayName: ele.displayName,
          left: ele.left,
          name: ele.name,
          id: ele.id
        };
        selectedData.push(item);
      });
    };
    this.selectedData.next(selectedData);
  }

}