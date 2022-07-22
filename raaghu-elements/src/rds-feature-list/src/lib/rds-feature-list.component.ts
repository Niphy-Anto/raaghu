import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-feature-list',
  templateUrl: './rds-feature-list.component.html',
  styleUrls: ['./rds-feature-list.component.scss'],
})
export class RdsFeatureListComponent implements OnInit {
  @Input() header!: string;
  @Input() listItems: any;
  @Input() columns!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
