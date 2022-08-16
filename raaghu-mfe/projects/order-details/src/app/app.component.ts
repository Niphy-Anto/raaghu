import { Component, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'order-details';
  public rdsOrderDetailsMfeConfig: ComponentLoaderOptions 
  
  ngOnInit(): void {
    this.rdsOrderDetailsMfeConfig={
      name:'RdsCompOrderDetails',
      input:{
        itemList: [
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
         qty:'Quantity 3',
         shipDetails:'Preparing to ship on June 05,2022',
         label:'Order#36690',
         "stepparList":[
          {stepname: "step1",steptabname:"Order placed", tablink: '#nav-home',ariacontrols: 'nav-home'},
              {stepname: "step2",steptabname:"Processing", tablink: '#nav-profile',ariacontrols: 'nav-profile'},
              {stepname: "step3",steptabname:"Shipped", tablink: '#nav-contact',ariacontrols: 'nav-contact'},
              {stepname: "step3",steptabname:"Delivered", tablink: '#nav-contact',ariacontrols: 'nav-contact'}
       ],
       address:[
        {header:"Shopping Address",addressLine1:"Brookland house,",addressLine2:"5439,Rose Mills Road,", addressLine3:"Santa Clara, CA95054"}
       ]
    
        },
       
      ],
    }
      
    }
  }
}


