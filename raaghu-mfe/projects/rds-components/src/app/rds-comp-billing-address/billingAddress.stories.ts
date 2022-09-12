import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsSelectListModule, } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompBillingAddressComponent } from './rds-comp-billing-address.component';


export default {
    title: 'Components/Billing Adress',
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
export const Template1 = Template.bind({});

Template1.args = {
    countryList:["India","China","Canada","Japan","Australia","USA","UK"]
}

