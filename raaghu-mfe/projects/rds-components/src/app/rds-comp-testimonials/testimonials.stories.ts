import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCarouselModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompTestimonialsComponent } from './rds-comp-testimonials.component';

export default {
  title: 'Components/Testimonials',
  component: RdsCompTestimonialsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule,RdsCarouselModule,RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompTestimonialsComponent> = (args: RdsCompTestimonialsComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
   carousalItem: [
      {
        icon:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
          name: 'Sam Smith',
          roleName: 'Product Manager',
          subTitle:'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat condimentum veilt class patent taciti sociosqu and litara ad litora torquent per conubia nastra.'
      },
      {
        icon:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
        name: 'king John',
        roleName: 'Tech Lead',
        subTitle:'this is the caption section were u can add the caption for the image',
      }
    ],
   
}


  
