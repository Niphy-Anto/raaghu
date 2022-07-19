import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-input-group',
  templateUrl: './rds-input-group.component.html',
  styleUrls: ['./rds-input-group.component.scss']
})
export class RdsInputGroupComponent implements OnInit {

  title = 'rds-input-group';
  @Input() size= 'md';
  @Input() label: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
