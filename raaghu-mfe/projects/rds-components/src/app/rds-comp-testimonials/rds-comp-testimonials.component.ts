import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-comp-testimonials',
  templateUrl: './rds-comp-testimonials.component.html',
  styleUrls: ['./rds-comp-testimonials.component.scss']
})
export class RdsCompTestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Input() carousalItem : any;
}
