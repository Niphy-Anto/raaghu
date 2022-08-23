import { Component, Input, OnInit } from '@angular/core';
import { Basic } from 'projects/libs/rds-elements/src/rds-accordion/src/lib/accordion.stories';
import { Advanced } from 'projects/libs/rds-elements/src/rds-breadcrumb/src/lib/breadcrumb.stories';

@Component({
  selector: 'app-rds-comp-teams',
  templateUrl: './rds-comp-teams.component.html',
  styleUrls: ['./rds-comp-teams.component.scss']
})
export class RdsCompTeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() displayType : 'Basic' | 'Advanced' = 'Basic';
  @Input() teamItem = [
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    },
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
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
