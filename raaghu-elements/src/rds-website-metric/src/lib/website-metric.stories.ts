
import { CommonModule } from '@angular/common';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { Story, Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RdsWebsiteMetricComponent } from './rds-website-metric.component';

export default {
    title: 'Elements/Website Metric',
    component: RdsWebsiteMetricComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule,
                RdsLabelModule,
                RdsIconModule,
                RdsButtonModule]
        }),
    ],
    argTypes: {
    },
} as Meta;

const Template: Story<RdsWebsiteMetricComponent> = (args: RdsWebsiteMetricComponent) => ({
    props: args,
});

export const type1 = Template.bind({})
type1.args = {
    item: {
        display_type: 'metric_type1',
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with'
    }
}

export const type2 = Template.bind({})
type2.args = {
    item: {
        display_type: 'metric_type2',
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with'

    }
}

export const type3 = Template.bind({})
type3.args = {
    item: {
        display_type: 'metric_type3',
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with'

    }
}
export const type4 = Template.bind({})
type4.args = {
    item: {
        display_type: 'metric_type4',
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with'


    }
}
export const type5 = Template.bind({})
type5.args = {
    item: {
        display_type: 'metric_type5',
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with'


    }
}
export const type6 = Template.bind({})
type6.args = {
    item: {
        display_type: 'metric_type6',
        title: '510+',
        link: 'Learn more',
        subtitle: 'Clients Worked with',
        description: 'We have successfully onboard more than 510 clients as of now. Amazing work experience with them'
    }
}