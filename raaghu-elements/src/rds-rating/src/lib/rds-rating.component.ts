import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-rating',
  templateUrl: './rds-rating.component.html',
  styleUrls: ['./rds-rating.component.scss']
})
export class RdsRatingComponent implements OnInit {
  itemList: any= [
    {id: 1, value: 1},
    {id: 2, value: 2},
    {id: 3, value: 3},
    {id: 4, value: 4},
    {id: 5, value: 5},
  ];

  @Input() WithNoOfReviews!: boolean;
  @Input() role: 'Basic' | 'Advanced' = 'Basic';

  @Input() rating: number = 0;
  @Input() colorVariant: string= "review";
  @Input() noOfReview?: number = 123;
  @Input() Size: 'small' | 'medium' | 'large' = 'medium';
  height = '';
  width = '';
  selected: any;
  constructor() { }

  ngOnInit(): void {
  }

  public get colorSelection(): string {
    const color = `text-${this.colorVariant}`;
    return color;
  }

  public get classes(): string {
    const sizes = `${this.Size === 'small' ? 'small ' : this.Size === 'large' ? 'fs-4' : 'md'}`;
    const startSize = `${this.Size === 'small' ? this.height = '14px' : this.Size === 'large' ? this.height = '28px' : this.height = '19px'}`;
    const startSize1 = `${this.Size === 'small' ? this.width = '14px' : this.Size === 'large' ? this.width = '28px' : this.width = '19px'}`;
    return sizes;
  }

  
}

