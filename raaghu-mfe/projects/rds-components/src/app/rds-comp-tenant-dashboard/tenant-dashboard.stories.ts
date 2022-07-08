import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBigNumberWidgetModule, RdsButtonModule, RdsCardModule, RdsChartBarHorizontalModule, RdsChartBoolModule, RdsChartDoughnutModule, RdsCheckboxModule, RdsDatepickerModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule, RdsWidgetModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsCompTenantDashboardComponent } from './rds-comp-tenant-dashboard.component';

export default {
  title: 'Components/Tenant Dashboard',
  component: RdsCompTenantDashboardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsWidgetModule, RdsBigNumberWidgetModule, RdsChartDoughnutModule, RdsChartBoolModule, RdsChartBarHorizontalModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompTenantDashboardComponent> = (args: RdsCompTenantDashboardComponent) => ({});

export const basic = Template.bind({});
