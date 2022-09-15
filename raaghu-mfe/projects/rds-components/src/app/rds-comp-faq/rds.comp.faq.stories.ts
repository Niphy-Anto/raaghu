import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsLabelModule } from '@libs/rds-elements';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { RdsCompFaqComponent } from './rds-comp-faq.component';

export default {
  title: 'Components/FAQ',
  component: RdsCompFaqComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, 
        RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompFaqComponent> = (args: RdsCompFaqComponent) => ({});

export const Default = Template.bind({});
