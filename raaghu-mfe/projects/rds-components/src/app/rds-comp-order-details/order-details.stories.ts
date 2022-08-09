import { RdsCompOrderDetailsComponent } from './rds-comp-order-details.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsAddressDetailModule } from 'projects/libs/rds-elements/src/rds-address-detail/src/public-api';
import { RdsLabelModule } from '@libs/rds-label';


export default {
  title: 'Components/Order-details',
  component: RdsCompOrderDetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsInputModule,
        RdsCheckboxModule,
       RdsAddressDetailModule,
       RdsLabelModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ],
  argTypes: {
    displaytype: {
      options: ['Basic', 'Advanced', 'With_Multiple_Items'],
      control: { type: 'select' }
    }
  }
} as Meta;

const Template: Story<RdsCompOrderDetailsComponent> = (args: RdsCompOrderDetailsComponent) => ({});

export const basic = Template.bind({});
basic.args = {
  displaytype: 'Basic'
}

export const advanced = Template.bind({});
advanced.args = {
  displaytype: 'Advanced'
}


export const multipleItems = Template.bind({});
multipleItems.args = {
  displaytype: 'With_Multiple_Items',

}


