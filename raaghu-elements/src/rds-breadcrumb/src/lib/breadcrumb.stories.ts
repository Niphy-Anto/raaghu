import { Story, Meta } from '@storybook/angular';
import { RdsBreadcrumbComponent } from './rds-breadcrumb.component';

export default {

  title: 'Elements/Breadcrumbs',

  component: RdsBreadcrumbComponent,
  argTypes: {
   
    //click: { action: 'clicked' },
    //colorType: {
    //  options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    //  control: { type: 'select' }
    //},
    //size: {
    //  options: ['small', 'large', 'medium'],
    //  control: { type: 'select' }
    //}
    //  role: {
    //  options: ['basic', 'Advanced', 'withDivider'],
    //  control: { type: 'select' }
    // }
  },
} as Meta;

const Template: Story<RdsBreadcrumbComponent> = (args: RdsBreadcrumbComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  role: 'basic',
  iconShow: false,
  disabled: false,
  customBreadcrumbsItems: [{ name: 'Home', route: '/home', iconClass: 'bi bi-house-door' }, { name: 'About', route: '/About', iconClass: 'bi bi-house-door' }, { name: 'Contact US', route: '/Contact', iconClass: 'bi bi-house-door' }, { name: 'Services', route: '/Services', iconClass: 'bi bi-house-door' }, { name: 'Contact US', route: '/Contact', iconClass: 'bi bi-house-door' }],
}

export const Advanced = Template.bind({});
Advanced.args = {
  role: 'Advanced',
  iconShow: true,
  disabled: false,
  customBreadcrumbsItems: [{ name: 'Home', route: '/home', iconClass: 'bi bi-house-door' }, { name: 'About', route: '/About', iconClass: 'bi bi-house-door' }, { name: 'Contact US', route: '/Contact', iconClass: 'bi bi-house-door' }, { name: 'Services', route: '/Services', iconClass: 'bi bi-house-door' }, { name: 'Contact US', route: '/Contact', iconClass: 'bi bi-house-door' }],
}

export const withDivider = Template.bind({});
withDivider.args = {
  role: 'withDivider',
  iconShow: true,
  disabled: false,
  customBreadcrumbsItems: [{ name: 'Home', route: '/home', iconClass: 'bi bi-house-door' }, { name: 'About', route: '/About', iconClass: 'bi bi-house-door' }, { name: 'Contact US', route: '/Contact', iconClass: 'bi bi-house-door' }, { name: 'Services', route: '/Services', iconClass: 'bi bi-house-door' }, { name: 'Contact US', route: '/Contact', iconClass: 'bi bi-house-door' }],

}
