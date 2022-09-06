import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAccordionModule, RdsButtonModule, RdsCardModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';

import { NgxTranslateModule } from '@libs/shared';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsCompSecretsComponent } from './rds-comp-secrets.component';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';



export default {
  title: 'Components/Secrets',
  component:  RdsCompSecretsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule,NgxTranslateModule,RdsInputModule,RdsCheckboxModule,RdsButtonModule,
      ],
      declarations:[
        RdsDataTableComponent
      ],
      providers:[
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story< RdsCompSecretsComponent> = (args:  RdsCompSecretsComponent) => ({

});

export const Default = Template.bind({});