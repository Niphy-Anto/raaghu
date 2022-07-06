import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCardModule, RdsCheckboxModule, RdsDatepickerModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsUserDelegationsComponent } from './rds-comp-user-delegations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Components/User Delegations',
  component: RdsUserDelegationsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsSelectListModule, RdsDatepickerModule, RdsCheckboxModule, RdsInputModule, BrowserAnimationsModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsUserDelegationsComponent> = (args: RdsUserDelegationsComponent) => ({});

export const basic = Template.bind({});
