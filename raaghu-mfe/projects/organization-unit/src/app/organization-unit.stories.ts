import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsCounterModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsRadioButtonModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompFeaturesComponent } from 'projects/rds-components/src/app/rds-comp-features/rds-comp-features.component';
import { RdsCompPermissionTreeComponent } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-comp-permission-tree.component';
import { RdsCompRoleListComponent } from 'projects/rds-components/src/app/rds-comp-role-list/rds-comp-role-list.component';
import { RdsOrganizationTreeComponent } from 'projects/rds-components/src/app/rds-comp-organization-tree/rds-comp-organization-tree.component';

export default {
  title: 'Pages/Organization Unit',
  component: RdsOrganizationTreeComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsDataTableComponent,RdsOrganizationTreeComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,RdsRadioButtonModule,RdsCounterModule
      ],
      providers: [
        FormBuilder,
       
      ],
    })
  ]
} as Meta;
const Template: Story<RdsOrganizationTreeComponent> = (args: RdsOrganizationTreeComponent) => ({
    props:{
      ...args
  }
  });
  export const Basic = Template.bind({});