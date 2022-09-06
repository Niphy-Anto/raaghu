import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { AppComponent } from './app.component';


export default {
  title: 'Pages/Under-construction',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
      RdsCompAlertComponent],
      imports: [
        RdsButtonModule,
        SharedModule,NgxTranslateModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    props:{
      ...args
  }
  });

  export const underConstructionPage = Template.bind({});
