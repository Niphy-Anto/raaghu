import { RdsCompOrderDetailsComponent } from './rds-comp-order-details.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAddressDetailModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsStepperModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsLabelModule } from '@libs/rds-label';
//import { RdsStepperModule } from '@libs/rds-stepper';
import { CommonModule } from '@angular/common';

import { RdsStepperModule } from 'projects/libs/rds-elements/src/rds-stepper/src/public-api';


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
        //RdsStepperModule,
        CommonModule,

        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ],
  argTypes: {
    displaytype: {
      options: ['with-progress-bars', 'With large images and progress bars', 'With large images and progress bars - 1'],
      control: { type: 'select' }
    }
  }
} as Meta;

const Template: Story<RdsCompOrderDetailsComponent> = (args: RdsCompOrderDetailsComponent) => ({
  props: args
});

export const basic = Template.bind({});
basic.args = {
  displaytype: 'with-progress-bars'
}

export const advanced = Template.bind({});
advanced.args = {
  displaytype: 'With large images and progress bars'
}


export const multiple_items = Template.bind({});
multiple_items.args = {
  displaytype: 'With large images and progress bars - 1',

}


