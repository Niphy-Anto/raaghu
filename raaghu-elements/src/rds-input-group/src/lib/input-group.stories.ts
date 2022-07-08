
import { Story, Meta } from '@storybook/angular';
import { RdsInputGroupComponent } from './rds-input-group.component';

export default {

    title: 'Elements/Input Group',
    component: RdsInputGroupComponent,
    // decorators: [
    //     moduleMetadata({
    //         declarations: [RdsInputComponent, RdsSelectListComponent],
    //         schemas: [CUSTOM_ELEMENTS_SCHEMA],
    //     }),
    // ],
    argTypes: {      
    },
} as Meta;

export const Basic: Story<RdsInputGroupComponent> = (args) => ({
    props: args,

    template: `<rds-input-group>
    <input   type="text" class="form-control"  id="Errormessage" placeholder="placeholder">    
    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>  
    </rds-input-group>`

});
Basic.args = {
    inputGroupSize: 'md',
}
