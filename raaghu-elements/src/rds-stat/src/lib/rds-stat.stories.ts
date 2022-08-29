
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsStatComponent } from './rds-stat.component';

export default {
  title: 'Elements/Stat',
  component: RdsStatComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule],
      }),
  ],


  argTypes: {
  },
} as Meta;

const Template: Story<RdsStatComponent> = (args: RdsStatComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
    statItems: [
        { title:'SAM SMITH',
        value: '2370', 
        icon: 'star',
        iconHeight:'80px',
        iconWidth:'80px',
        iconFill:true,
        iconStroke:true},
    
        { title:'SAM SMITH',
        value: '2370', 
        icon: 'star',
        iconHeight:'80px',
        iconWidth:'80px',
        iconFill:true,
        iconStroke:true},

        { title:'SAM SMITH',
        value: '2370', 
        icon: 'star',
        iconHeight:'80px',
        iconWidth:'80px',
        iconFill:true,
        iconStroke:true},
      ]

}

