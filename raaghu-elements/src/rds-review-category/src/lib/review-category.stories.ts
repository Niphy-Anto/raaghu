import { CommonModule } from '@angular/common';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsLikeDislikeModule } from '@libs/rds-like-dislike';
import { RdsRatingModule } from '@libs/rds-rating';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsReviewCategoryComponent } from './rds-review-category.component';

export default {
  title: 'Elements/Review-category',
  component: RdsReviewCategoryComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule,
        RdsLabelModule,
        RdsRatingModule,
        RdsLikeDislikeModule],
    }),
  ],
  argTypes: {

  },
} as Meta;

const Template: Story<RdsReviewCategoryComponent> = (args: RdsReviewCategoryComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  requestCategory: {
    name: 'Jems Rock',
    date: new Date(),
    reviewRate: 4,
    reviewTitle: 'dasfsdfdg',
    reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
    description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable,yet look classy enough that I can wear them at work or even some formal events.Thank you!' 
  }
}


