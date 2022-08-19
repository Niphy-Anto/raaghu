import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'rds-team-member',
  templateUrl: './rds-team-member.component.html' ,
  styleUrls: ['./rds-team-member.component.scss']
})
export class RdsTeamMemberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() displayType?: 'Basic' | 'Advance' = 'Basic' ; 
  @Input() teamItem =[
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } 
  ]


}
