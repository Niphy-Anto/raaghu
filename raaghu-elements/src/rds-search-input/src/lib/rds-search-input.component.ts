import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-search-input',
  templateUrl: './rds-search-input.component.html',
  styleUrls: ['./rds-search-input.component.scss']
})
export class RdsSearchInputComponent implements OnInit {

  @Input() value = ''
  @Input() placeholder?: string;
  @Input() icon = ''
  @Input() size: 'default' | 'small' | 'large' = 'default';
  @Input() label='';
  @Input() position: 'start' | 'end' | 'top' | 'bottom' = 'start';
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  send(event: any) {
    // console.log(event.target.value)
    this.onClick.emit(event.target.value);
  }
  sendkeyup(event: any) {
    // console.log(event.target.value)
    this.value = event.target.value
    // this.onClick.emit(event.target.value);
  }
  search() {
    this.onClick.emit(this.value);
  }

  public get classes(): string[] {
    var inputClass = ['form-group has-search ']
    if (this.position === "start" || this.position === "end") {
      inputClass.push('mx-5');
    }
    else if (this.position === "top") {
      inputClass.push('mt-3');
    }
    if (this.size === 'small') {
      inputClass.push('input-group-sm');
    }
    else if (this.size === "large") {
      inputClass.push('input-group-lg');
    }
    else {
      inputClass.push('');
    }
    return inputClass;
  }


  public get labelClasses(): string[] {

    var classes = ['position-absolute']
    if (this.position === 'start') {     
      classes.push('start-0');     
    }
    else if(this.position === 'end') {
      classes.push('end-0')
    }
    else if(this.position === 'bottom') {
      classes.push('mt-5')
    }
     else if(this.position === 'top') {
      classes.push('top-0')
    }

    return classes;
  }


}
