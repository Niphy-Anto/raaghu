import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsInputModule, } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompMarketingWebsiteNewsletterComponent } from './rds-comp-marketing-website-newsletter.component';


export default {
    title: 'Components/Marketing Website Newsletter',
    component: RdsCompMarketingWebsiteNewsletterComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompMarketingWebsiteNewsletterComponent],
            imports: [
                FormsModule, ReactiveFormsModule, NgxTranslateModule, RdsButtonModule, RdsInputModule, SharedModule
            ],
            providers: [
                FormBuilder,

            ],
        })
    ],
    argTypes: {
        templateType: {
            options: ['Template_1', 'Template_2', 'Template_3', 'Template_4'],
            control: { type: 'select' }
        },
    }
} as Meta;
const Template: Story<RdsCompMarketingWebsiteNewsletterComponent> = (args: RdsCompMarketingWebsiteNewsletterComponent) => ({
    props: {
        ...args
    }
});
export const Template1 = Template.bind({});

Template1.args = {
    templateType: 'Template_1'
}
export const Template2 = Template.bind({});

Template2.args = {
    templateType: 'Template_2'
}
export const Template3 = Template.bind({});

Template3.args = {
    templateType: 'Template_3'
}
export const Template4 = Template.bind({});

Template4.args = {
    templateType: 'Template_4'
}