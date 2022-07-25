import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsImageComponent } from './rds-image.component';

export default {
  title: 'Elements/Product Image',
  component: RdsImageComponent,
  decorators: [
    
  ],
  
} as Meta

const Template: Story<RdsImageComponent> = (args: RdsImageComponent) => ({
  props: args,
});

export const Basic = Template.bind({})
Basic.args ={
  display_type: 'Basic',
  
    
}


export const Product_overview1 = Template.bind({})
Product_overview1.args ={
  display_type: 'Product_overview1'
}

export const Product_overview2 = Template.bind({})
Product_overview2.args ={
  display_type: 'Product_overview2'
}

export const Product_overview3 = Template.bind({})
Product_overview3.args ={
  display_type: 'Product_overview3'
}