import { Component, Input, OnInit } from '@angular/core';
import { appDetailsItems } from './rds-app-details.service';

@Component({
  selector: 'rds-app-details',
  templateUrl: './rds-app-details.component.html',
  styleUrls: ['./rds-app-details.component.scss']
})
export class RdsAppDetailsComponent implements OnInit {

  lightslategrey: boolean = true;
  @Input() ItemsList:appDetailsItems;

  constructor() { }
 

  ngOnInit(): void {
  }

  onClick(event) {

  }
}
