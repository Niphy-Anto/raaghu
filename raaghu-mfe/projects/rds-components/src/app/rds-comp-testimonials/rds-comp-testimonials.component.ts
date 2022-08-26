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
  @Input() displayType: 'basic' | 'advanced' = 'basic';
  @Input() testimonialItems: any[] =  [
    { img:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    title:'SAM SMITH',
    subtitle: 'PRODUCT MANAGER', 
    description: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat', 
    icon: 'zapier',
    route: '/home',
    selected:true,
    iconHeight:'18px',
    iconWidth:'18px',
    iconFill:false,
    iconStroke:true},

    { img:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    title:'King John',
    subtitle: 'PRODUCT MANAGER', 
    description: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat', 
    icon: 'zapier',
    route: '/home',
    selected:true,
    iconHeight:'18px',
    iconWidth:'18px',
    iconFill:false,
    iconStroke:true,
  },
  ];
}
