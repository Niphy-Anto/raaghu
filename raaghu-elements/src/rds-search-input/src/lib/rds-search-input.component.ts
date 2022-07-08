import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-search-input',
  templateUrl: './rds-search-input.component.html',
  styleUrls: ['./rds-search-input.component.scss']
})
export class RdsSearchInputComponent implements OnInit {

  value = ''
  @Input() Placeholder = ''
  @Input() icon = ''
  @Input() size: 'default' | 'small' | 'large' = 'default'
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

  public get classes(): string {
    const mode = `${this.size === 'default' ? '' : this.size === 'small' ? 'input-group-sm' : 'input-group-lg'}`
    return mode;
  }

}
