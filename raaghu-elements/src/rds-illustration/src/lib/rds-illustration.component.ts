import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-illustration',
  templateUrl: './rds-illustration.component.html',
  styleUrls: ['./rds-illustration.component.scss']
})
export class RdsIllustrationComponent implements OnInit {

  title = 'rds-illustration';

  @Input() label!: string;
  @Input() subLabel!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
