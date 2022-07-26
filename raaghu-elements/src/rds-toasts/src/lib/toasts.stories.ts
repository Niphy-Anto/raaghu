
import { Story, Meta } from '@storybook/angular';
import { RdsToastsComponent } from './rds-toasts.component';

export default {
  title: 'Elements/Toast',
  component: RdsToastsComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // borderColor: { control: 'color' },
    // Color: { control: 'color' },
    colorVariant: {
      options: ['info', 'warning', 'success', 'danger', 'primary', 'secondary'],
      control: { type: 'select' }
    },
    toastMessageColorVariant: {
      options: ['info', 'warning', 'success', 'danger', 'primary', 'secondary'],
      control: { type: 'select' }
    },
  },
} as Meta;

const Template: Story<RdsToastsComponent> = (args: RdsToastsComponent) => ({
  props: args,
});

export const Basic = Template.bind({})
Basic.args = {
  withHeader: false,
  headerTitle: 'Bootstrap',
  time: '11 Seconds ago',
}

const Content: Story<RdsToastsComponent> = (args: RdsToastsComponent) => ({
  props: args,
  template: `<rds-toasts
    [withImage]="false"
    [withHeader]="false"
    [colorVariant]="colorVariant"
    [toastMessageColorVariant]="toastMessageColorVariant"
    headerTitle="Bootstrap"
    time="11 Seconds ago"
  >
  <div class="mt-2 p-2 border-top">
  <button type="button" class="btn btn-primary btn-sm">Take action</button>&nbsp;
  <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
   </div>
  </rds-toasts>`
});

export const withCallToAction = Content.bind({})
withCallToAction.args = {
  withHeader: false,
  headerTitle: 'Bootstrap',
  time: '11 Seconds ago',
}


const Pos: Story<RdsToastsComponent> = (args: RdsToastsComponent) => ({
  props: args,
  template: `
    <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
    <rds-toasts
    [withHeader]="false"
    [colorVariant]="colorVariant"
    [toastMessageColorVariant]="toastMessageColorVariant"
    [position]="position"
    headerTitle="Bootstrap"
    time="11 Seconds ago"
    [position]="position"
  >
  </rds-toasts>
  </div>
  `

});

export const Position = Pos.bind({})
withCallToAction.args = {
  withHeader: false,
  colorVariant:'primary',
  position: 'Top-Left',
  headerTitle: 'Bootstrap',
  time: '11 Seconds ago',
}
