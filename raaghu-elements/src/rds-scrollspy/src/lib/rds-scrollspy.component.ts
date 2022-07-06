import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-scrollspy',
  templateUrl: './rds-scrollspy.component.html',
  styleUrls: ['./rds-scrollspy.component.scss']
})
export class RdsScrollspyComponent implements OnInit {

  @Input() scrollId?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
