import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompProductOverviewComponent } from './rds-comp-product-overview.component';
import {
  RdsBadgeModule,
  RdsBreadcrumbModule,
  RdsButtonComponent,
  RdsButtonModule,
  RdsCardModule,
  RdsLabelModule,
} from '@libs/rds-elements';

export default {
  title: 'Components/Product-Overview',
  component: RdsCompProductOverviewComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsBreadcrumbModule,
        RdsLabelModule,
        RdsBadgeModule,
        RdsCardModule,
        RdsButtonModule,
      ],
      providers: [FormBuilder],
    }),
  ],
} as Meta;

const Template: Story<RdsCompProductOverviewComponent> = (args: RdsCompProductOverviewComponent) => ({
  props: args,
});

export const Producroverview = Template.bind({});

Producroverview.args = {
  customBreadcrumbsItems: [
    {
      name: 'Men',
      route: '/men',
      iconClass: 'bi bi-house-door',
    },
    {
      name: 'Clothing',
      route: '/clothing',
      iconClass: 'bi bi-house-door',
    },
    {
      name: 'Basic Tee 6-Pack',
      route: '/basic-tee-6-pack',
      iconClass: 'bi bi-house-door',
    },
  ],
  roles: 'producroverview1'

};

export const Producroverview1 = Template.bind({});

Producroverview1.args = {
  producroverview2 : [
    {
          name: 'Women',
          route: '/Women',
          iconClass: 'bi bi-house-door',
        },
        {
          name: 'Clothing',
          route: '/clothing',
          iconClass: 'bi bi-house-door',
        },
        {
          name: 'Basic Tee',
          route: '/basic-tee',
          iconClass: 'bi bi-house-door',
        },
   ],
  roles: 'producroverview2'

};
