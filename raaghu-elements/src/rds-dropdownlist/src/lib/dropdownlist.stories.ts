import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsDropdownlistComponent } from './rds-dropdownlist.component';

export default {

  title: 'Elements/Dropdown List',
  component: RdsDropdownlistComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, RdsIconModule],
    }),
  ],
  argTypes: {

    colorVariant: {
      options: ['Primary', 'Secondary', 'Success', 'Danger', 'Info'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'radio' }
    },

  },
} as Meta;

const Template: Story<RdsDropdownlistComponent> = (args: RdsDropdownlistComponent) => ({

  props: args,
});


export const Basic: Story<RdsDropdownlistComponent> = (args) => ({
  props: args,
  template:
    `<rds-dropdownlist [listItems]="listItems"  size="default"  colorVariant="btn-secondary">
    </rds-dropdownlist>`
});
Basic.args = {
  placeholder: 'Filter',
  size: 'default',
  multiSelect: false,
  colorVariant: 'btn-secondary',
  listItems: [
    { value: 'Export to excel', some: 'value', id: 1, href: '', icon: 'export_to_excel', iconWidth: '20px', iconHeight: '25px', iconStroke: true, iconFill: false },
    { value: 'Import from excel', some: 'value', id: 2, href: '', icon: 'download_collected_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Click here download sample import file.', some: 'value', id: 3, href: '', icon: 'download_collected_data', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
  ]
};
