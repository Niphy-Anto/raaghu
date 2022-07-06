import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-input-group',
  templateUrl: './rds-input-group.component.html',
  styleUrls: ['./rds-input-group.component.scss']
})
export class RdsInputGroupComponent implements OnInit {

  title = 'rds-input-group';
  @Input() inputGroupSize: 'sm' | 'md' | 'lg' = 'sm';
  @Input() label: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  get classes() {
    return `input-group-${this.inputGroupSize}`;
  }

}
