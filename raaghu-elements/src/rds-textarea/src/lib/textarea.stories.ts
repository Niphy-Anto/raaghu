import { Story, Meta } from '@storybook/angular';
import { RdsTextareaComponent } from './rds-textarea.component';

export default {
    title: 'Elements/Textarea',
    component: RdsTextareaComponent,
    argTypes: {
        disabled: { control: { type: 'boolean' } },
        rows: { control: { type: 'text' } },
        readonly: { control: { type: 'boolean' } },
        value: { control: { type: 'text' } },
        tooltipPlacement: {
            options: ['top', 'bottom', 'right', 'left'],
            control: { type: 'radio' }
        },
    }
} as Meta

const Template: Story<RdsTextareaComponent> = (args: RdsTextareaComponent) => ({
    props: args,
});

export const basic = Template.bind({})
basic.args = {
    disabled: false,
    rows: '3',
    readonly: false,
    label: 'Text area',
    placeholderText: "Add Placeholder",
    floatinginputLabel: ""
}
export const Tooltip = Template.bind({});
Tooltip.args = {
    disabled: false,
    rows: '3',
    readonly: false,
    label: 'Text area',
    placeholderText: "Add Placeholder",
    floatinginputLabel: "",
    tooltipPlacement: 'bottom',
    tooltipTitle: 'This is tooltip'
};