import { Story, Meta } from '@storybook/angular';
import { RdsAvatarComponent } from './rds-avatar.component';


export default {
  title: 'Elements/Avatar',
  component: RdsAvatarComponent,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'radio'
    },
    colorVariant: {
      options: ['success', 'warning', 'light', 'danger', 'info', 'dark', 'secondary'],
      control: { type: 'select' }
    }
  },
} as Meta;

const Template: Story<RdsAvatarComponent> = (args: RdsAvatarComponent) => ({
  props: args,

});

const avatarWithInfoTemplate: Story<RdsAvatarComponent> = (args: RdsAvatarComponent) => ({
  props: {
    ...args
  },
  template: `<rds-avatar
[firstName]="firstName" 
[lastName]="lastName"
[size]="size"
[colorVariant]="colorVariant"
[verticallyAlligned]="verticallyAlligned"
>
{{firstName}} {{lastName}}


</rds-avatar>`

});

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  firstName: 'Allen',
  lastName: 'Russel',
  colorVariant: 'warning'
};

export const profile = Template.bind({});
profile.args = {
  size: 'medium',
  withProfilePic: true,
  profilePic: 'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
};

export const avtarWithHorizontallyAllignedInfo = avatarWithInfoTemplate.bind({});
avtarWithHorizontallyAllignedInfo.args = {
  size: 'medium',
  firstName: 'King',
  lastName: 'John',
  colorVariant: 'warning',
};

export const avatarWithVerticallyAllignedInfo = avatarWithInfoTemplate.bind({});
avatarWithVerticallyAllignedInfo.args = {
  size: 'medium',
  firstName: 'James',
  lastName: 'Potter',
  colorVariant: 'warning',
  verticallyAlligned: true
};



// Default.argTypes = {
//   colorVariant: {
//     options: ['success', 'warning', 'light', 'danger', 'info', 'dark', 'secondary'],
//     control: { type: 'select' }
//   }
// }
