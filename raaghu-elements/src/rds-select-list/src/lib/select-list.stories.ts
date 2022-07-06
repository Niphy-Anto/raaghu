import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { RdsSelectListComponent } from './rds-select-list.component';

export default {
  title: 'Elements/Select List',
  component: RdsSelectListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    multiple: { control: { type: 'boolean' } },
    customIcon: { control: { type: 'text' } },
    rows: { control: { type: 'text' } },
    LabelType: {
      options: ['Top', 'Bottom', 'Left', 'Right'],
      control: { type: 'select' },
    },
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
  },
} as Meta;

const Template: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<rds-select-list
    size="default"
    rows="3"
    [disabled]="false"
    [multiple]="false"
    customIcon="">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </rds-select-list>`,
});
const tooltipTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<rds-select-list 
    size="default"
    [disabled]="false"
    [multiple]="false"
    customIcon=""
    [tooltipTitle]="tooltipTitle"
    [tooltipPlacement]="tooltipPlacement"
  >
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  </rds-select-list>`,
});
export const basic = Template.bind({});

basic.args = {
  rows: '3',
  Label: '',
  LabelType: 'text',
  size: 'default',
  disabled: false,
  multiple: false,
  customIcon: ''
};

export const Tooltip = tooltipTemplate.bind({});
Tooltip.args = {
  disabled: false,
  multiple: false,
  customIcon: '',
  tooltipPlacement: '',
  tooltipTitle: 'This is tooltip'
};