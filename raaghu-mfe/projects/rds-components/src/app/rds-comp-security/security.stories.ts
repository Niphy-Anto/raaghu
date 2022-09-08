import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RdsCheckboxModule, RdsCounterModule, RdsInputModule,} from '@libs/rds-elements';
 import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsSecurityComponent } from './rds-comp-security.component';
import { RdsLabelModule } from '@libs/rds-label';
    
export default {
  title: 'Components/Security',
  component: RdsSecurityComponent,
  decorators: [
    moduleMetadata({
        declarations:[],
        
      imports: [
        FormsModule, 
        ReactiveFormsModule,
        SharedModule,
        NgxTranslateModule,
        HttpClientModule,
        RdsLabelModule,
        RdsCheckboxModule, 
        RdsCounterModule,
        RdsInputModule,
        ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsSecurityComponent> = (args: RdsSecurityComponent) => ({});

export const Default= Template.bind({});

