import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rds-comp-apply-for-position',
  templateUrl: './rds-comp-apply-for-position.component.html',
  styleUrls: ['./rds-comp-apply-for-position.component.scss']
})
export class RdsCompApplyForPositionComponent implements OnInit {
  @Input() itemList: any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
