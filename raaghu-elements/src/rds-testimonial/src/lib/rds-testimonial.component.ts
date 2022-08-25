import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-testimonial',
  templateUrl: './rds-testimonial.component.html',
  styleUrls: ['./rds-testimonial.component.scss']
})

export class RdsTestimonialComponent implements OnInit {

  @Input() testimonialItems: any[] = [];
 
  constructor() { }

  ngOnInit(): void {
  }

}
