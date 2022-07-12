import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-elements';
import { RdsSearchInputComponent } from './rds-search-input.component';

export default {
  title: 'Elements/Search',
  component: RdsSearchInputComponent,
  decorators: [
    moduleMetadata({
      imports: [RdsIconModule],
    }),
  ],
  argTypes: {

    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'select' }
    },

  },
} as Meta

const Template: Story<RdsSearchInputComponent> = (args: RdsSearchInputComponent) => ({
  props: args,
});

export const Basic = Template.bind({})
template:
`<rds-dropdownlist 
[size]="size"
[label]="label"
size="default" 
[placeholder]="placeholder"
[position]="position"
 [value]="value"

>`
Basic.args = {

  placeholder: 'Search',
  size: 'small',

}