import { Story, Meta } from '@storybook/angular';
import { RdsFabMenuComponent } from './rds-fab-menu.component';

export default {
  title: 'Elements/Fab Menu',
  component: RdsFabMenuComponent,
} as Meta;

// const Template: Story<RdsFabMenuComponent> = (args: RdsFabMenuComponent) => ({
//     props: args,
// });

// export const Basic = Template.bind({})
// Basic.args = {
    
// }
const Template: Story<RdsFabMenuComponent> = (args: RdsFabMenuComponent) => ({
    props: args
  });
  
  export const basic = Template.bind({});
  
  basic.args = {
    colorVariant: 'btn-secondary',
    size: 'default',
    listItems : [
        { value: 'New Role', some: 'value', key: 'new', icon: 'users', iconWidth: '20px', iconHeight: '20px' },
        { value: 'Refresh', some: 'value', key: 'refresh', icon: 'bi bi-arrow-clockwise', iconWidth: '20px', iconHeight: '20px' },
        { value: 'Export to excel', some: 'value', key: 'export', icon: 'bi bi-upload', iconWidth: '20px', iconHeight: '20px' },
        { value: 'Import from excel', some: 'value', key: 'import', icon: 'bi bi-download', iconWidth: '20px', iconHeight: '20px' },
        { value: 'Delete', some: 'value', key: 'delete', icon: 'bi bi-delete', iconWidth: '20px', iconHeight: '20px' },
        { value: 'Click here download sample import file.', some: 'value', key: 'download', icon: '', iconWidth: '20px', iconHeight: '20px' },
      ]
  };