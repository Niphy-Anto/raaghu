import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RdsAccordionModule, RdsCheckboxModule,} from '@libs/rds-elements';
import { RdcCompApiScopeResourcesComponent } from './rdc-comp-api-scope-resources.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
  
export default {
  title: 'Components/Api Scope Resource',
  component: RdcCompApiScopeResourcesComponent,
  decorators: [
    moduleMetadata({
        declarations:[],
        
      imports: [
        FormsModule, 
        ReactiveFormsModule,
        SharedModule,
        NgxTranslateModule,
        RdsAccordionModule,
        HttpClientModule,
        RdsCheckboxModule,  
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdcCompApiScopeResourcesComponent> = (args: RdcCompApiScopeResourcesComponent) => ({});

export const Default= Template.bind({});

