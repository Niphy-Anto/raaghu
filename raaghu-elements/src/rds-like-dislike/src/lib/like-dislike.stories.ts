
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsLikeDislikeComponent } from './rds-like-dislike.component';


export default {
  title: 'Elements/Like-Dislike',
  component: RdsLikeDislikeComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsLikeDislikeComponent> = (args: RdsLikeDislikeComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
 
}

