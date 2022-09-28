import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'edition-new';
  public edition : any[

  ];
  public data:any[];
  isReset: boolean = false;
  viewCanvas: boolean = false;
  activePage: number = 0;
  public rdsEditionNewMfeConfig: ComponentLoaderOptions;
  
  ngOnInit(): void {
    this.rdsEditionNewMfeConfig = {
      name: 'RdsCompFeaturesListNew',
      input: {
        editionData:[{
        EditionName: "Corporate",
        EditionTitle: "Strong Application for large team",
        Price: "45",
        Plan:"Per month",
        features: [
          {
            label:"Chat Support",
          },
          {
              label:"Optimized hashtags",
          },
          {
              label:"Unlimited Users",
          },
      ]
      }],
      PlanList: [

        { isFree: true, value: 'standard', displayText: 'Standard', isSelected: false },
         { isFree: false, value: 'advanced', displayText: 'Advanced', isSelected: false },

    ],
    EditionList: [

        { isFree: true, value: 'value 1', displayText: 'Value 1', isSelected: false },
         { isFree: false, value: 'value 2', displayText: 'Value 2', isSelected: false },

    ],
    alertData:  {
      iconUrl: "delete",
      colorVariant: "danger",
      alertConfirmation: "Thank You!",
      messageAlert: "Your application has been summited successfully.",
      CancelButtonLabel: "Cancel",
      DeleteButtonLabel: "Delete"
    }
     
      },
      output: {
        saveEditionData: (data) => {
          if (data) {
              // this.store.dispatch(saveEdition(data))
            }
          }
      }
      }
  }

  
  }
