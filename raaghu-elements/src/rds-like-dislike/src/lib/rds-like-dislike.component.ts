import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class likeArray {
  constructor(
    likeCount: number,
    dislikeCount: number
  ) { }
}

@Component({
  selector: 'rds-like-dislike',
  templateUrl: './rds-like-dislike.component.html',
  styleUrls: ['./rds-like-dislike.component.scss'],
})

export class RdsLikeDislikeComponent implements OnInit {
  @Input() likeCount: number = 0;
  @Input() dislikeCount: number = 0;
   likeArray: any[] = [];
  @Input() min = 0;
  @Output() onClick = new EventEmitter<any>();
  @Input() label?: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  likeFun(event:any) {
      this.likeCount++;
      this.likeArray=[
        {
          likeCount:this.likeCount,
          dislikeCount:this.dislikeCount,
        }
      ]
      this.onClick.emit(this.likeArray);
  }

  dislikeFun(event:any) {
    this.dislikeCount++;
    this.likeArray=[
      {
        likeCount:this.likeCount,
        dislikeCount:this.dislikeCount,
      }
    ]
    this.onClick.emit(this.likeArray);
}

}
