import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
 import { HttpClientModule } from '@angular/common/http';
import { RdcCompApiScopeBasicsComponent } from './rdc-comp-api-scope-basics.component';
import { RdsCheckboxModule, RdsInputModule, RdsLabelModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
  
export default {
  title: 'Components/Api Scope Basics',
  component: RdcCompApiScopeBasicsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, NgxTranslateModule, SharedModule,HttpClientModule ,RdsInputModule,RdsCheckboxModule,RdsLabelModule,RdsTextareaModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdcCompApiScopeBasicsComponent> = (args: RdcCompApiScopeBasicsComponent) => ({});

export const  Default = Template.bind({});
