import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rds-dropdownlist',
  templateUrl: './rds-dropdownlist.component.html',
  styleUrls: ['./rds-dropdownlist.component.scss']
})
export class RdsDropdownlistComponent implements OnInit, OnChanges {

  title = 'rds-dropdownlist';

  isMasterSel: boolean;
  categoryList: any;
  checkedCategoryList: any;
  @Input() value: any;
  @Input()
  multiSelect!: boolean;

  @Input()
  selectAll: boolean = true;

  @Input()
  size?: string;

  @Input() iconHeight: string = '20px';
  @Input() iconWidth: string = '20px';
  @Input() iconStroke: boolean = true;
  @Input() iconFill: boolean = false;
  @Input() icon: string = '';

  @Input()
  colorVariant?: string;

  @Input()
  placeholder = "Filter by user"

  @Input()
  DropdownItems!: TemplateRef<any>

  @Input()
  listItems!: any;

  @Output()
  onSelect = new EventEmitter<{ item: any }>()

  @Input() reset: boolean = false
  @Input() resetPlaceholder: string = ''
  @Input() resetFormSubject: Observable<boolean> = new Observable<boolean>();
  @Input() entity = false;
  badgeList: any[] = [];
  constructor() {
    this.isMasterSel = false;
  }

  ngOnInit(): void {
    this.resetFormSubject.subscribe(response => {
      if(response){
      this.checkedCategoryList = [];
      this.badgeList = [];
      this.placeholder = this.resetPlaceholder;
    }
   })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.reset) {
      this.checkedCategoryList = [];
      this.badgeList = [];
      this.placeholder = this.resetPlaceholder;
    }
  }

  public get button1(): any[] {

    var customClasses = [' btn ', ' form-select ', `${this.colorVariant}`, 'dropdown-toggle', 'w-100']

    if (this.size === 'small') {
      var selectSize = 'btn-sm'
      customClasses.push(selectSize)
    }
    else if (this.size === 'large') {
      var selectSize = 'btn-lg'
      customClasses.push(selectSize)
    }
    else {
      var selectSize = ''
      customClasses.push(selectSize)
    }

    //if (this.color !== '') {

    //  var index = customClasses.indexOf(`${this.colorVariant}`)
    //  customClasses.splice(index, 1)
    //}
    return customClasses
  }

  checkUncheckAll() {
    for (var i = 0; i < this.listItems.length; i++) {
      this.listItems[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }

  
  isAllSelected() {
    this.isMasterSel = this.listItems.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  initAllSelect(event: any, selecteditem: any) {
    if (this.multiSelect) {
      selecteditem.isSelected = !selecteditem.isSelected;
      this.isAllSelected();
      this.onSelect.emit({ item: selecteditem });
    }
    else {
      this.placeholder = selecteditem.some;
      this.onSelect.emit({ item: selecteditem });
    }
  }


  getCheckedItemList() {
    this.checkedCategoryList = [];
    this.badgeList = [];
    for (var i = 0; i < this.listItems.length; i++) {
      if (this.listItems[i].isSelected){
        this.checkedCategoryList.push(" " + this.listItems[i].value);
        this.badgeList.push(this.listItems[i]);
      }
    }
    if (this.checkedCategoryList.length > 0) {
      this.placeholder = this.checkedCategoryList.toString();
    }
    else {
      this.placeholder = "Filter";
    }

    //this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }

}
