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
  // @Input() size?: 'default'| 'small'| 'large' = 'default';
  @Input() size?:string;
  // @Input()
  // selectSize: string = '';

  @Input() labelText?: string;
  @Input() LabelType?: 'Top' | 'Bottom' | 'Left' | 'Right' = 'Bottom';
  // @Input() LabelType = '';
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

  public get classesForSelect(): string{
if(this.multiple===false){
  this.rows='';
}
  var selectClass = ['form-select '];
  var selectSize=` form-select-${this.size==='small'?'sm':this.size==='large'?'lg':'md'}`       
    return selectClass + selectSize;    
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
    var classes = ['form-label']
   if (this.LabelType === 'Top') {
   classes.push('top-0');
 }
  else if (this.LabelType === 'Bottom') {
   classes.push(' d-flex flex-column-reverse')
  }
    else if (this.LabelType === 'Left') {
      classes.push('d-flex align-items-baseline justify-content-end gap-3')
    }
    else if (this.LabelType === 'Right') {
      classes.push('d-flex align-items-baseline flex-row-reverse gap-3')
    }
    return classes;
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
