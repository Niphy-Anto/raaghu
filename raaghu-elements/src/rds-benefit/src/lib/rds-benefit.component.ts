import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-benefit',
  templateUrl: './rds-benefit.component.html',
  styleUrls: ['./rds-benefit.component.scss']
})
export class RdsBenefitComponent implements OnInit {

  constructor() { }
  @Input()
  item: any ;
  
  @Input() display_type?: string = 'Basic';
  
  ngOnInit(): void {
    console.log(this.item)
  }

}
 