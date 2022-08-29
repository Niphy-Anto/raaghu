import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-stat',
  templateUrl: './rds-stat.component.html',
  styleUrls: ['./rds-stat.component.scss']
})
export class RdsStatComponent implements OnInit {

  @Input() statItems: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
