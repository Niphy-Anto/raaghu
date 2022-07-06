import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsCounterComponent } from './rds-counter.component';

export default {
  title: 'Elements/Counter',
  component: RdsCounterComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white'],
      control: { type: 'select' }
    },   
  },
} as Meta

const Template: Story<RdsCounterComponent> = (args: RdsCounterComponent) => ({
  props: args,
});

export const Basic = Template.bind({})
Basic.args = {
  Title: '',
  label: '',
  colorVariant: 'primary',
  counterValue: 0,
  width: 124
}
