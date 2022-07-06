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
    
});

export const basic = Template.bind({});
