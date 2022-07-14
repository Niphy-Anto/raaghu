import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsSearchInputComponent } from './rds-search-input.component';

export default {
  title: 'Elements/Search',
  component: RdsSearchInputComponent,
  decorators: [
    moduleMetadata({
      imports: [RdsIconModule],
    }),
  ],
} as Meta

const Template: Story<RdsSearchInputComponent> = (args: RdsSearchInputComponent) => ({
  props: args,
});

export const Basic = Template.bind({})
Basic.args = {

  Placeholder: 'Search',
  size: 'small',

}