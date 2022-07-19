import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsCompProductListComponent } from './rds-comp-product-list.component';

export default {
  title: 'Components/Product List',
  component: RdsCompProductListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsLabelModule, RdsCardModule, RdsBadgeModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompProductListComponent> = (args: RdsCompProductListComponent) => ({});

export const basic = Template.bind({});
