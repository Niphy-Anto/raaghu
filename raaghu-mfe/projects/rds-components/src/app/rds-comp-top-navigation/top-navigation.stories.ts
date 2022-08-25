import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAvatarModule, RdsButtonModule, RdsDropdownModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';
import { RdsTopNavigationComponent } from './rds-comp-top-navigation.component';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { API_BASE_URL } from '@libs/shared';
import demodata from '../assets/appconfig.json';

export function getRemoteServiceBaseUrl(): any {
  let URL = demodata.remoteServiceBaseUrl
  return URL;
}

export default {
  title: 'Components/Top Navigation',
  component: RdsTopNavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsNavTabModule, RdsDropdownModule, RdsAvatarModule, RouterModule.forRoot([])
      ],
      providers: [
        FormBuilder,
        DatePipe,
        { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl }
      ],
    })
  ]
} as Meta;

const Template: Story<RdsTopNavigationComponent> = (args: RdsTopNavigationComponent) => ({});

export const basic = Template.bind({});
