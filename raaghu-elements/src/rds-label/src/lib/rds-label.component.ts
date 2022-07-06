import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-label',
  templateUrl: './rds-label.component.html',
  styleUrls: ['./rds-label.component.scss'],
  encapsulation: ViewEncapsulation.None,
 
})
export class RdsLabelComponent implements OnInit {
@Input() label?: string
  constructor() { } 

  ngOnInit(): void {
  }

}
