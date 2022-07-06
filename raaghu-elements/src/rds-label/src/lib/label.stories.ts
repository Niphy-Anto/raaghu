
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsLabelComponent } from './rds-label.component';

export default {
  title: 'Elements/Label',
  component: RdsLabelComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsLabelComponent> = (args: RdsLabelComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  label: ""
}

