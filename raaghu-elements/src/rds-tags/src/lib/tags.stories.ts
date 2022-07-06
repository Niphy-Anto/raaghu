import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsTagsComponent } from './rds-tags.component';

export default {
  title: 'Elements/Tag',
  component: RdsTagsComponent,
  decorators: [
    moduleMetadata({

      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {
  
    Tagtype: {
      options: ['Square', 'Round'],
      control: { type: 'radio' }
    }, 
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'default'],
      control: { type: 'select' }
    },

  }
} as Meta

const Template: Story<RdsTagsComponent> = (args: RdsTagsComponent) => ({
  props: args,
});

export const basic = Template.bind({})
basic.args = {
  tagType: 'Square',
  roles: 'Basic',
  colorVariant: 'primary'

}

export const TagWithScroll = Template.bind({})
TagWithScroll.args = {
  tagType: 'Square',
  roles: 'TagWithScroll',
  colorVariant: 'primary'

}
