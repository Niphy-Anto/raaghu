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
import { RdsPriceModule } from 'projects/libs/rds-elements/src/rds-price/src/public-api';
import { RdsFeatureListModule } from 'projects/libs/rds-elements/src/rds-feature-list/src/public-api';
import { RdsIconModule } from '@libs/rds-icon';

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
        RdsPriceModule,
        RdsFeatureListModule,
        RdsIconModule
      ],
      providers: [FormBuilder],
    }),
  ],
} as Meta;

const Template: Story<RdsCompProductOverviewComponent> = (args: RdsCompProductOverviewComponent) => ({
  props: args,
});

export const Producroverview1 = Template.bind({});

Producroverview1.args = {
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
  productType: 'producroverview1',
  listItems: [
    { id: 1, value: 'Hand cut and sewn locally', some: 'value' },
    { id: 2, value: 'Dyed with our proprietary colors', some: 'value' },
    { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
    { id: 4, value: 'Ultra-soft 100% cotton', some: 'value' },
  ]

};

export const Producroverview2 = Template.bind({});

Producroverview2.args = {
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
   productType: 'producroverview2',
   listItems: [
    { id: 1, value: 'Only the best materials', some: 'value' },
    { id: 2, value: 'Ethically and locally made', some: 'value' },
    { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
    { id: 4, value: 'Machine wash cold with similar colors', some: 'value' }
  ]

};
export const Producroverview3 = Template.bind({});

Producroverview3.args = {
   productType: 'producroverview3',
   listItems: [
    { id: 1, value: 'Multiple strap configurations', some: 'value' },
    { id: 2, value: 'Spacious interior with top zip', some: 'value' },
    { id: 3, value: 'Leather handle and tabs', some: 'value' },
    { id: 4, value: 'Interior dividers', some: 'value' },
    { id: 5, value: 'Stainless strap loops ', some: 'value' },
    { id: 6, value: 'Double stitched construction', some: 'value' },
    { id: 7, value: 'Water-resistant', some: 'value' }
  ]

};
export const Producroverview4 = Template.bind({});

Producroverview4.args = {
   productType: 'producroverview4',

};