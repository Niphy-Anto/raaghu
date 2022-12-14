import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RdsAccordionModule, RdsCheckboxModule } from '@libs/rds-elements';
import { RdsCompApiScopeResourcesComponent } from './rds-comp-api-scope-resources.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';

export default {
  title: 'Components/Api Scope Resource',
  component: RdsCompApiScopeResourcesComponent,
  decorators: [
    moduleMetadata({
      declarations: [],

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

const Template: Story<RdsCompApiScopeResourcesComponent> = (args: RdsCompApiScopeResourcesComponent) => ({});

export const Default = Template.bind({});

