import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsSelectListModule, } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompBillingAddressComponent } from './rds-comp-billing-address.component';


export default {
    title: 'Components/Billing Address',
    component: RdsCompBillingAddressComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompBillingAddressComponent],
            imports: [
                FormsModule, RdsSelectListModule, ReactiveFormsModule, NgxTranslateModule, RdsButtonModule, RdsInputModule,RdsCheckboxModule, SharedModule
            ],
            providers: [
                FormBuilder,

            ],
        })
    ],
    argTypes: {
    }
} as Meta;
const Template: Story<RdsCompBillingAddressComponent> = (args: RdsCompBillingAddressComponent) => ({
    props: {
        ...args
    }
});
export const Default = Template.bind({});

Default.args = {
    countryList:["India","China","Canada","Japan","Australia","USA","UK"]
}

