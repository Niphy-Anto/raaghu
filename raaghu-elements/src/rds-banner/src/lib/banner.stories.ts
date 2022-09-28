import { Story, Meta } from '@storybook/angular';
import { RdsBannerComponent } from './rds-banner.component';

export default {
  title: 'ELEMENTS/Banner',
  component: RdsBannerComponent,
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'radio' }
    },
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' }
    },
  }
} as Meta

const Template: Story<RdsBannerComponent> = (args: RdsBannerComponent) => ({
  props: args
});

export const Default = Template.bind({})
Default.args = {
  align: 'start',
  bannerText: 'Big news! We are excited to announce a brand new product.',
  sticky: false,
  position: 'top',
  colorVariant: 'info'
}
