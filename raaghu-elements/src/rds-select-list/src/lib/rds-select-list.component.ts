import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// import { Tooltip } from 'bootstrap'
declare var bootstrap: any;

@Component({
  selector: 'rds-select-list',
  templateUrl: './rds-select-list.component.html',
  styleUrls: ['./rds-select-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsSelectListComponent,
    multi: true
  }]
})
export class RdsSelectListComponent implements AfterViewInit, OnChanges {

  selectedValue = ''
  onChange!: (value: string) => void;
  onTouched!: () => void
  @Input()
  size: string = ''

  @Input()
  selectSize: string = '';

  @Input() Label = '';
  @Input() LabelType = '';

  @Input()
  rows: string = '';
  @Input()
  multiple: boolean = false;

  defaultSelect: boolean = true;

  @Input() itemList: any = [];
  @Input()
  showSizeAttribute?: boolean

  @Input()
  disabled: boolean = false;
  @Input()
  customIcon = '';
  @Input() value: any = '';
  @Input()
  placeholderText?: string

  // floatingcontent =false;
  @Input()
  isRequired: boolean = false;

  @Input()
  listItems = [{ value: 'India', some: 'value' }, { value: 'USA' }, { value: 'Canada' }];

  @Output() select = new EventEmitter();

  static count: number = 0;

  @Input() tooltipTitle: string = '';

  @Input() tooltipPlacement!: string;

  id: string = 'selectList';

  constructor() {
    RdsSelectListComponent.count++;
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.value === undefined) {
      this.value = '';
    }
  }
  ngAfterViewInit(): void {
    if (this.tooltipPlacement && this.tooltipTitle) {
      const tooltipElement: any = document.getElementById(this.id)
      // update
      if (tooltipElement) {
        let bsTooltip = new bootstrap.Tooltip(tooltipElement)
        tooltipElement.title = this.tooltipTitle
        bsTooltip = new bootstrap.Tooltip(tooltipElement)
      }
    }
  }

  writeValue(obj: any): void {
    this.selectedValue = obj;

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;

  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public get ClassesForShowSelect(): string {
    var show = this.showSizeAttribute ? '' : 'd-none'
    return show
  }

  public get classesForSelect(): string[] {
    var selectTagClasses = ['form-select']
    if (this.size === 'small') {
      var selectSize = 'form-select-sm'
      selectTagClasses.push(selectSize)
    }
    else if (this.size === 'large') {
      var selectSize = 'form-select-lg'
      selectTagClasses.push(selectSize)
    }
    else {
      var selectSize = 'default'
      selectTagClasses.push(selectSize)
    }

    return selectTagClasses
  }

  public get bootstrapIcon(): string {
    var icon = this.customIcon
    return icon
  }

  public get icon(): string[] {
    var classList = [''];
    if (this.customIcon === '') {

      return classList
    }
    else {
      classList.push('icon')
      return classList
    }
  }

  public get divclasses(): string[] {
    var classList = [''];
    if (this.LabelType === 'Left') {
      classList.push('d-flex align-items-baseline justify-content-end gap-3');
    } else if (this.LabelType === 'Right') {
      classList.push('d-flex align-items-baseline flex-row-reverse gap-3');
    } else if (this.LabelType === 'Bottom') {
      classList.push('d-flex flex-column-reverse');
    } else {
      classList.push('d-block');
    }
    return classList;
  }

  public get iconPosition(): string {
    if (this.customIcon === '') {
      return ''
    }
    else {
      return 'icon-position'
    }
  }

  onSelect(event: any) {
    this.value = event;
    this.defaultSelect = false;
    this.onChange(event)
    this.onTouched()
  }

}