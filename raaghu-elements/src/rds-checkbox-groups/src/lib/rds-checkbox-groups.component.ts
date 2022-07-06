import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-checkbox-groups',
  templateUrl: './rds-checkbox-groups.component.html',
  styleUrls: ['./rds-checkbox-groups.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsCheckboxGroupsComponent,
    multi: true
  }]
})
export class RdsCheckboxGroupsComponent implements OnInit {
  title = "rds-checkbox-groups";
  value = ''
  onChange!: (value: string) => void;
  onTouched!: () => void
  @Input() label?: string;
  // @Output() onChange = new EventEmitter<boolean>();

  @Input() checked!: boolean;
  @Input() disabled!: boolean;

  @Input() switch!: boolean;

  @Input() inline!: boolean;
  // @Input() itemList:any = [];

  @Input() id?: string
  @Input() withLabel!: boolean;
  @Output() onCheck: EventEmitter<void> = new EventEmitter<void>();
  @Output() onUncheck: EventEmitter<void> = new EventEmitter<void>();
  
  @Input() isInputGroup!: boolean;
  @Input() itemList!: any;

  @Input() state: 'checkbox' | 'Indeterminate' | 'errorcheckbox' = 'checkbox';

  @Output() onClick = new EventEmitter<{ evnt: any, item: string }>();

  //@Output() selectedItemData: EventEmitter<selectedData> = new EventEmitter();

  //public selectdataItem: selectedData = [];

  constructor() { }
  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  ngOnInit(): void { }

  public get classes(): string[] {
    var classes = ['form-check']
    if (this.isInputGroup === true) {
      classes = ['input-group-text mb-2'];
    }
    if (this.switch === true) {
      classes.push('form-switch px-5')
      return classes
    }
    if (this.inline === true) {
      classes.push('form-check-inline')
      return classes
    }
    if (this.state === 'Indeterminate') {
      classes.push('inder')
      return classes
    }
    if (this.state === 'errorcheckbox') {
      classes.push('errorche')
      return classes
    }
    return classes
  }


  getValue(event: any) {
    this.onClick.emit({ evnt: event, item: event.target.value });
    this.onChange(event.target.click)
    this.onTouched();

    // new logic
    // if(this.selectdataItem) {
    //   this.selectedItemData.emit(this.selectdataItem);
    // }

  }
  stateChanged() {
    console.log('clicked')
    this.checked ? this.onCheck.emit() : this.onUncheck.emit();
  }

}

// export class selectedData {
//   constructor(
//     label: string
//   ) { }
//}


