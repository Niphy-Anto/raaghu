import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-review-category',
  templateUrl: './rds-review-category.component.html',
  styleUrls: ['./rds-review-category.component.scss']
})

export class RdsReviewCategoryComponent implements OnInit {
  @Input()
  item: any ;
  
  @Input() display_type?: string = 'Basic';
  onClick(event){

  }

  ngOnInit(): void {
  }
  today: number = Date.now();
}
