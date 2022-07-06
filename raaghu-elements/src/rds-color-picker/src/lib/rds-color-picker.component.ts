import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-color-picker',
  templateUrl: './rds-color-picker.component.html',
  styleUrls: ['./rds-color-picker.component.scss']
})
export class RdsColorPickerComponent implements OnInit {

  title1 = 'rds-color-picker';
  @Input() value = '';
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Input() title!: string;

  @Output() onItemClick = new EventEmitter<any>();

  onChange!: (value: string) => void;
  onTouched!: () => void;

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  changedValue(event: any) {
    this.onItemClick.emit({ evnt: event, item: event.target.value });
    console.log(event.target.value);
    // this.onChange(event.target.value)
    // this.onTouched()
  }
}
