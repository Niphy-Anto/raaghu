import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
 import { HttpClientModule } from '@angular/common/http';
import { RdsCompApiScopeBasicsComponent } from './rds-comp-api-scope-basics.component';
import { RdsCheckboxModule, RdsInputModule, RdsLabelModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
  
export default {
  title: 'Components/Api Scope Basics',
  component: RdsCompApiScopeBasicsComponent,
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

const Template: Story<RdsCompApiScopeBasicsComponent> = (args: RdsCompApiScopeBasicsComponent) => ({});

export const  Default = Template.bind({});
