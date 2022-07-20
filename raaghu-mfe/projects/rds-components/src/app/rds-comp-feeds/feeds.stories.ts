import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsAvatarModule, RdsLabelModule } from '@libs/rds-elements';

import { RdsIconModule } from '@libs/rds-icon';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { RdsCompFeedsComponent } from './rds-comp-feeds.component';

export default {
  title: 'Components/Feeds',
  component: RdsCompFeedsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
         ReactiveFormsModule,
         RdsIconModule,
         RdsLabelModule,
         RdsAvatarModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ],
  argTypes: {
    displaytype: {
      options: ['Basic', 'Advanced'],
      control: { type: 'select' }
    }
  }

} as Meta;

const Template: Story<RdsCompFeedsComponent> = (args: RdsCompFeedsComponent) => ({
  props:args
 
});
// const Advance: Story<RdsCompFeedsComponent> = (args: RdsCompFeedsComponent) => ({
//   props: args,
 
// });
 export const advanced =Template.bind({});
 advanced.args={
  
 }
 

export const basic = Template.bind({});
basic.args={
}

