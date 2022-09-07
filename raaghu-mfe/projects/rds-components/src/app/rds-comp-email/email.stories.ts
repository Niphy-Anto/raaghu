import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAccordionModule, RdsButtonModule, RdsCardModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';

import { NgxTranslateModule } from '@libs/shared';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsCompEmailComponent } from './rds-comp-email.component';


export default {
  title: 'Components/Email',
  component: RdsCompEmailComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule,NgxTranslateModule,RdsInputModule,RdsCheckboxModule,RdsButtonModule,
      ],
      providers:[
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompEmailComponent> = (args: RdsCompEmailComponent) => ({});

export const basic = Template.bind({});