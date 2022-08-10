import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rds-comp-order-details',
  templateUrl: './rds-comp-order-details.component.html',
  styleUrls: ['./rds-comp-order-details.component.scss']
})
export class RdsCompOrderDetailsComponent implements OnInit {
  @Input() displaytype: 'with-progress-bars' | 'With large images and progress bars' | 'With large images and progress bars - 1' = 'with-progress-bars';
  constructor() { }
  @Input() itemList = [
    {
     profilePic: 'https://th.bing.com/th/id/OIP.khH-pSAYsgQuFLbIrpFs6gHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1.3',
     prodname:'Premium Quality Soft T-Shirt',
     price:'12',
     highlights:'White tees stain easily, and black tees fade. this is going to be gray for a while',
     update:'Shopping Update',
     tno:'Tracking number',
     trackingNumber:'655634573859574857',
     emailId:'g******@gmail.com',
     phoneNo:'8*******53',
     qty:'Quantity 3'
    },
  ];
  
  stepparList:any=[
    {stepname: "step1",steptabname:"Profile", tablink: '#nav-home',ariacontrols: 'nav-home'},
        {stepname: "step2",steptabname:"Positions", tablink: '#nav-profile',ariacontrols: 'nav-profile'},
        {stepname: "step3",steptabname:"Setting", tablink: '#nav-contact',ariacontrols: 'nav-contact'}
 ];
  isEdit:boolean=false;
  ngOnInit(): void {
  }

  onEdit(){
      this.isEdit=!this.isEdit;
  }
}
