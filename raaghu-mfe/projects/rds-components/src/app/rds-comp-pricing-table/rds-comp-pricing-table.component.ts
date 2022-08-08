import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-rds-comp-pricing-table',
  templateUrl: './rds-comp-pricing-table.component.html',
  styleUrls: ['./rds-comp-pricing-table.component.scss'],
})


export class RdsCompPricingTableComponent implements OnInit {

  /* @Input() pricingTableHeaderItems?: any;*/
  @Input() public pricingTableHeaderItems: any = [];
  @Input() public pricingTableBodyItems: any = [];
  @Input() public itemList: any = [];
  selectedPlan: string = 'Monthly Plan';
  selectedPlanInfo: any;
  planList: [
    {
      "id": 1,
      "label": "Monthly Plan",
      "name": "Radio-Button",
      "checked": true
      "planInfo": [{
        "price": "$240 year",
        "description": "Video team and setup, we can create product.",

      }]
    },
    {
      "id": 2,
      "label": "Yearly Plan",
      "name": "Radio-Button",
      "checked": false,
      "planInfo": [
        {
          "price": "$300 year",
          "description": "Video team and setup, we can create product.",
        }]
    },
  ];



  constructor() { }

  ngOnInit(): void {
    this.selectedPlanInfo = this.planList.find((x: any) => x.label === this.selectedPlan);

    //  this.date.getTime = this.formDate.transform(this.currentdate);
  }

  onRadioButtonSelect(e: any) {
    this.selectedPlan = e.item;
    this.selectedPlanInfo = this.planList.find((x: any) => x.label === this.selectedPlan);
    console.log(e);
  }

}
