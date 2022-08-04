import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'review-category',
  templateUrl: './rds-review-category.component.html',
  styleUrls: ['./rds-review-category.component.scss']
})
export class RdsReviewCategoryComponent implements OnInit {
 
  @Input() requestCategory: any = { name: 'Jems Rock', 
  date: new Date(),
   reviewRate: 4, 
   reviewTitle: '',
   reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
    description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable,yet look classy enough that I can wear them at work or even some formal events.Thank you!' 
    }
  constructor() {
  }



  ngOnInit(): void {
  }
  today: number = Date.now();
}
