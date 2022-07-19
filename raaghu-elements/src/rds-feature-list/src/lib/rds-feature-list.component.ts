import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-rds-feature-list',
  templateUrl: './rds-feature-list.component.html',
  styleUrls: ['./rds-feature-list.component.scss'],
})
export class RdsFeatureListComponent implements OnInit {
  @Input() header!: string;
  @Input() listItems: any;
  @Input() column!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
