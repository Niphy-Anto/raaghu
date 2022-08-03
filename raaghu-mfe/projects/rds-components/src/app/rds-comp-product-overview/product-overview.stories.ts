import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompProductOverviewComponent } from './rds-comp-product-overview.component';
import {
  RdsBadgeModule,
  RdsBenefitModule,
  RdsBreadcrumbModule,
  RdsButtonComponent,
  RdsButtonModule,
  RdsCardModule,
  RdsIconLabelModule,
  RdsLabelModule,
} from '@libs/rds-elements';
import { RdsPriceModule } from 'projects/libs/rds-elements/src/rds-price/src/public-api';
import { RdsFeatureListModule } from 'projects/libs/rds-elements/src/rds-feature-list/src/public-api';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsColorModule } from 'projects/libs/rds-elements/src/rds-color/src/public-api';
import { RdsProductImageModule } from 'projects/libs/rds-elements/src/rds-product-image/src/public-api';
import { RdsRatingModule } from 'projects/libs/rds-elements/src/rds-rating/src/public-api';
import { RdsSizeModule } from 'projects/libs/rds-elements/src/rds-size/src/public-api';

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
        RdsIconModule,
        RdsColorModule,
        RdsProductImageModule,
        RdsRatingModule,
        RdsIconLabelModule,
        RdsBenefitModule,
        RdsSizeModule
      ],
      providers: [FormBuilder],
    }),
  ],
} as Meta;

const Template: Story<RdsCompProductOverviewComponent> = (
  args: RdsCompProductOverviewComponent
) => ({
  props: args,
});

export const Producroverview1 = Template.bind({});

Producroverview1.args = {
  // customBreadcrumbsItems: [
  //   {
  //     name: 'Men',
  //     route: '/men',
  //     iconClass: 'bi bi-house-door',
  //   },
  //   {
  //     name: 'Clothing',
  //     route: '/clothing',
  //     iconClass: 'bi bi-house-door',
  //   },
  //   {
  //     name: 'Basic Tee 6-Pack',
  //     route: '/basic-tee-6-pack',
  //     iconClass: 'bi bi-house-door',
  //   },
  // ],
  productType: 'producroverview1',
  listItems: [
    { id: 1, value: 'Hand cut and sewn locally', some: 'value' },
    { id: 2, value: 'Dyed with our proprietary colors', some: 'value' },
    { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
    { id: 4, value: 'Ultra-soft 100% cotton', some: 'value' },
  ],
  itemList: [
    { id: 1, color: '#FFFFFF' },
    { id: 2, color: '#FDD2FF' },
    { id: 3, color: '#BFEAFF' },
  ],
  item: [
    {
      id: 1,
      icon: 'roles',
      iconHeight: '25px',
      iconWidth: '25px',
      title: 'International delivery',
      description: 'Get your order in 2 years',
    },
  ],

  sizeData : [{value: 'XXS'},{value:'S'},{value:'M'},{value:'L'},{value:'XL'},{value:'2XL'},{value:'3XL'},{value:'XXS'}]

  // imgitemList:[
  //   "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png",
  //   "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png",
  //   "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  // ]
};

export const Producroverview2 = Template.bind({});

Producroverview2.args = {
  // producroverview2 : [
  //   {
  //         name: 'Women',
  //         route: '/Women',
  //         iconClass: 'bi bi-house-door',
  //       },
  //       {
  //         name: 'Clothing',
  //         route: '/clothing',
  //         iconClass: 'bi bi-house-door',
  //       },
  //       {
  //         name: 'Basic Tee',
  //         route: '/basic-tee',
  //         iconClass: 'bi bi-house-door',
  //       },
  //  ],
  productType: 'producroverview2',
  listItems: [
    { id: 1, value: 'Only the best materials', some: 'value' },
    { id: 2, value: 'Ethically and locally made', some: 'value' },
    { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
    { id: 4, value: 'Machine wash cold with similar colors', some: 'value' },
  ],
  itemList: [
    { id: 1, color: '#F88AAC' },
    { id: 2, color: '#6F6F6F' },
    { id: 3, color: '#16BE36' },
  ],
  sizeData : [{value: 'XXS'},{value:'S'},{value:'M'},{value:'L'},{value:'XL'},{value:'2XL'},{value:'3XL'},{value:'XXS'}],

  item: [
    {
      id: 1,
      icon: 'roles',
      iconHeight: '25px',
      iconWidth: '25px',
      title: 'International delivery',
      description: 'Get your order in 2 years',
    },
  ],
  // imgitemList:[
  //   "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
  //   "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
  //   "https://cdn.shopify.com/s/files/1/0752/6435/products/2_1418d8b1-f625-4531-b858-bf6e2ba4b2f3_1_160x.jpg?v=1639994439"
  // ]
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
    { id: 7, value: 'Water-resistant', some: 'value' },
  ],
  itemList: [
    { id: 1, color: '#853610' },
    { id: 2, color: '#323EAE' },
    { id: 3, color: '#FF9900' },
  ],
  // imgitemList:[
  //   "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
  // "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
  // "https://cdn.shopify.com/s/files/1/0752/6435/products/2_1418d8b1-f625-4531-b858-bf6e2ba4b2f3_1_160x.jpg?v=1639994439",
  // "https://cdn.shopify.com/s/files/1/0752/6435/products/1_dac179d7-7d1c-438c-a053-e85703a08be1_160x.jpg?v=1639546727",
  // "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_160x.jpg?v=1639994439"
  // ]
};
export const Producroverview4 = Template.bind({});

Producroverview4.args = {
  productType: 'producroverview4',
  itemList: [
    { id: 1, color: '#E1CBA4' },
    { id: 2, color: '#323EAE' },
    { id: 3, color: '#FF9900' },
  ],
  sizeDataWithDescription : [{value: '18L', description:"Perfect for a reasonable amount of snacks."},{value: '20L', description:"Enough room for a serious amount of snacks."}]
  // producroverview4 : [
  //   {
  //         name: 'Travel',
  //         route: '/Travel',
  //         iconClass: 'bi bi-house-door',
  //       },
  //       {
  //         name: 'Bags',
  //         route: '/Bags',
  //         iconClass: 'bi bi-house-door',
  //       },
  //  ],
  //  imgitemList:[
  //   "https://cdn.shopify.com/s/files/1/0752/6435/products/2_1418d8b1-f625-4531-b858-bf6e2ba4b2f3_1_160x.jpg?v=1639994439"
  // ]
};
