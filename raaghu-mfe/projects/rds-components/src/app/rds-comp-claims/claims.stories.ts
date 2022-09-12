import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RdsCompClaimsComponent } from './rds-comp-claims.component';
import { NgxTranslateModule } from '@libs/shared';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsLabelModule } from '@libs/rds-elements';

export default {
  title: 'Components/Claims',
  component: RdsCompClaimsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule,NgxTranslateModule,RdsButtonModule,RdsCheckboxModule,RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompClaimsComponent> = (args: RdsCompClaimsComponent) => ({
    props:{
        ...args
    },
});

export const Default = Template.bind({});
 
Default.args= {
  ClaimData:{
    claim_ato_e: 'undefined',
    claim_f_to_o: 'undefined',
    claim_p_to_z: 'undefined'
  }
 
}