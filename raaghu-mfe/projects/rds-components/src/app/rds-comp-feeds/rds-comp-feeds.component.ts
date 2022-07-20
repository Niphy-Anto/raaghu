import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import inputStories from 'projects/libs/rds-elements/src/rds-input/src/lib/input.stories';

@Component({
  selector: 'app-rds-comp-feeds',
  templateUrl: './rds-comp-feeds.component.html',
  styleUrls: ['./rds-comp-feeds.component.scss']
})
export class RdsCompFeedsComponent implements OnInit {

  @Input() displaytype: 'Basic' | 'Advanced' = 'Basic';

  icon: string;
  profilePic: string;
  date = moment().format('YYYY-MM-DD');
  fill: boolean;
  colorVariant: string;
  date2: string;


  @Input() listItems = [];

  @Input() itemList = [
    {

      'actor': 'Jijo Fleshman',
      'action': 'Deployed Workcation to production',
      date: this.date,
      icon: 'search',
      fill: true,
      colorVariant: 'secondary',
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1'
    },
    {
      'actor': 'Bethany Blake',
      'action': 'Advanced to phone screening by',
      date: this.date,
      icon: 'plus',
      fill: true,
      colorVariant: 'primary',
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1'

    },
    {
      'actor': 'Martha Gardner',
      'action': 'Completed Phone screening with',
      date: this.date,
      icon: 'plus',
      fill: true,
      colorVariant: 'warning',
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1'

    },
    {
      'actor': 'Bethany Blake',
      'action': 'Advanced to interview by',
      date: this.date,
      icon: 'search',
      fill: true,
      colorVariant: 'danger',
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1'
    },
    {
      'actor': 'Katherine Snyder',
      'action': 'Completed interview with',
      date: this.date,
      icon: 'plus',
      fill: true,
      colorVariant: 'warning',
      profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1'
    }
  ]
  pDate: any;


  constructor() { }

  ngOnInit(): void {
    // this.pDate=this.date.from(this.date2);
    //   // const difference = moment(this.date,"DD/MM/YYYY HH:mm:ss").diff(moment(this.date2,"DD/MM/YYYY HH:mm:ss"))
    //   // console.log(difference)
    //   // this.pDate=  moment(this.date, 'ddd MMM DD YYYY HH:mm:ss GMT Z').diff(this.date2, 'DD/MM/YYYY HH:mm:ss');
    //   console.log(this.pDate)

    this.date = moment(this.date).fromNow()
    console.log(this.date)
  } 



}
