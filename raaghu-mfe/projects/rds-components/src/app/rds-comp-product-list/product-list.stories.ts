import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsCompProductListComponent } from './rds-comp-product-list.component';
import { RdsColorModule } from 'projects/libs/rds-elements/src/rds-color/src/public-api';
import { RdsIconModule } from '@libs/rds-icon';

export default {
  title: 'Components/Product List',
  component: RdsCompProductListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsLabelModule, RdsCardModule, RdsBadgeModule, RdsColorModule, RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompProductListComponent> = (args: RdsCompProductListComponent) => ({
  props:{
    ...args
}
});

export const withInlinePrice = Template.bind({});
withInlinePrice.args = {
  role: 'withInlinePrice',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},]
}

export const simple = Template.bind({})
simple.args = {
  role: 'simple',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": ""},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": ""},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": ""},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},]
}

export const withCTALink= Template.bind({})
withCTALink.args = {
  role: 'withCTALink',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},]
}

export const withColorSwatchesAndHorizontalScrolling= Template.bind({})
withColorSwatchesAndHorizontalScrolling.args = {
  role: 'withColorSwatchesAndHorizontalScrolling',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": ""},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": ""},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},],
  itemList: [
    { id: 1, color: '#FFFFFF' },
    { id: 2, color: '#FDD2FF' },
    { id: 3, color: '#BFEAFF' },
  ]
}


export const withTallImages= Template.bind({})
withTallImages.args = {
  role: 'withTallImages',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": ""},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},]
}

export const withImageOverlayAndAddButton= Template.bind({})
withImageOverlayAndAddButton.args = {
  role: 'withImageOverlayAndAddButton',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": ""},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},]
}

export const withTallImagesAndCTALink= Template.bind({})
withTallImagesAndCTALink.args = {
  role: 'withTallImagesAndCTALink',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},]
}

export const withBorderGrid= Template.bind({})
withBorderGrid.args = {
  role: 'withBorderGrid',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": ""},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": ""},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": ""},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": ""},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": ""},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},]
}

export const withSupportingText= Template.bind({})
withSupportingText.args = {
  role: 'withSupportingText',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": ""},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": "Quality Assured"},]
}

export const cardWithFullDetails= Template.bind({})
cardWithFullDetails.args = {
  role: 'cardWithFullDetails',
  withInlinePriceProductListItems:[{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},]
}







