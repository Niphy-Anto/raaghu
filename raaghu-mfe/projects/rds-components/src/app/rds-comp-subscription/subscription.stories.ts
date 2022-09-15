import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAvatarModule, RdsButtonModule, RdsCardModule, RdsDropdownModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';
import { RdsCompSubscriptionComponent } from './rds-comp-subscription.component';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/Subscription',
  component: RdsCompSubscriptionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsCardModule, NgxTranslateModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompSubscriptionComponent> = (args: RdsCompSubscriptionComponent) => ({
    props:{
      ...args
    }
});

export const basic = Template.bind({});
basic.args={
  subscriptionData:[{
    name: "test",
    price: "23",
    duration: "2",
    iconurl:"assets/Group.jpg",
    recommended:false,
    features:["Maximum User Count","Test Check feature","Test check feature count 2"]
  }]
}