import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCardModule,  RdsCheckboxModule,  RdsCounterModule,  RdsInputModule, RdsLabelModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsSelectListModule } from '@libs/rds-select-list';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompAlertPopupComponent } from 'projects/rds-components/src/app/rds-comp-alert-popup/rds-comp-alert-popup.component';
import { RdsCompEditionNewBasicComponent } from 'projects/rds-components/src/app/rds-comp-edition-new-basic/rds-comp-edition-new-basic.component';
import { RdsCompEditionNewFeaturesComponent } from 'projects/rds-components/src/app/rds-comp-edition-new-features/rds-comp-edition-new-features.component';
import { RdsCompFeaturesListNewComponent } from 'projects/rds-components/src/app/rds-comp-features-list-new/rds-comp-features-list-new.component';




export default {
    title: 'Pages/Edition New',
    component: RdsCompFeaturesListNewComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompFeaturesListNewComponent,RdsCompEditionNewBasicComponent,RdsCompEditionNewFeaturesComponent,RdsCompAlertPopupComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                RdsOffcanvasModule,
                RdsButtonModule,
                RdsNavTabModule,
                RdsInputModule,
                RdsSelectListModule,
                RdsCardModule,
                RdsLabelModule,
                SharedModule,
                RdsCheckboxModule,
                NgxTranslateModule,
                RdsModalModule,
                RdsIconModule,
                RdsCounterModule
                
            ],
            providers: [
                FormBuilder
            ],
        })
    ],
    argTypes: {

    }

} as Meta;

const Template: Story<RdsCompFeaturesListNewComponent> = (args: RdsCompFeaturesListNewComponent) => ({
    props: { ...args }

});


export const Default = Template.bind({});
Default.args = {
    PlanList: [

        { isFree: true, value: '1', displayText: 'Standard', isSelected: false },
         { isFree: false, value: '5', displayText: 'Advanced', isSelected: false },

    ],
    EditionList: [

        { isFree: true, value: '1', displayText: 'Value 1', isSelected: false },
         { isFree: false, value: '5', displayText: 'Value 2', isSelected: false },

    ],
    EditionData:[{
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
      alertData:  {
        iconUrl: "delete",
        colorVariant: "danger",
        alertConfirmation: "Thank You!",
        messageAlert: "Your application has been summited successfully.",
        CancelButtonLabel: "Cancel",
        DeleteButtonLabel: "Delete"
      }

}


