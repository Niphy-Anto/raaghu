import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsSizeComponent } from './rds-size.component';


export default {
  title: 'Elements/Size',
  component: RdsSizeComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;
const Template: Story<RdsSizeComponent> = (args: RdsSizeComponent) => ({
  props: args,
  template:
      `
      <div class="col-md-12">
    <rds-size [sizeType]="sizeType"></rds-size>
  `,
});

export const Simple = Template.bind({});
 
Simple.args = {
  sizeType: 'withoutDescription'
};

export const withDescription = Template.bind({});

withDescription.args = {
  sizeType: 'withDescription'
};
