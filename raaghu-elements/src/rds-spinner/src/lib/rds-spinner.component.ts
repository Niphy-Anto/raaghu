import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-spinner',
  templateUrl: './rds-spinner.component.html',
  styleUrls: ['./rds-spinner.component.scss']
})
export class RdsSpinnerComponent implements OnInit {

  @Input() spinnerType = false;

  //@Input()
  //color?: string;

  @Input() size: 'sm' | 'md' = 'md';

  @Input() colorVariant: 'text-primary' | 'text-secondary' | 'text-success' | 'text-danger' | 'text-warning' | 'text-info' | 'text-light' | 'text-dark' = 'text-primary';

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    const border = `${this.spinnerType ? 'spinner-grow ' + this.colorVariant : 'spinner-border ' + this.colorVariant} `;
    const size = `spinner-border-${this.size}`
    return border + size;
  }

}
