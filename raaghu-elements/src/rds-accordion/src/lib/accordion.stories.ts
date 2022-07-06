// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
// import {AppComponent as RdsAccordionComponent } from './app.component';
import { RdsAccordionComponent } from './rds-accordion.component';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Elements/Accordion',
  component: RdsAccordionComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsAccordionComponent, AccordionItemComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    onClose: { action: 'clicked' },
    onShow: { action: 'clicked' },
  },
} as Meta;

const Template: Story<RdsAccordionComponent> = (args: RdsAccordionComponent) => ({
  props: { ...args },
  template: `<rds-accordian></rds-accordian>`,
});
export const Basic: Story<RdsAccordionComponent> = (args) => ({
  props: args,
  template: `
  <rds-accordian [id]="id">
  <accordion-item title="Section 1 title" [accordionId]="id" >
  <h3>Custom </h3>
  </accordion-item>
  <accordion-item title="Section 2 title" [accordionId]="id" >
  <h3>Custom </h3>
  </accordion-item>
</rds-accordian>`,
});
Basic.args = {
  expand: true,
  id:"accordionBasic"
};
export const withFlush: Story<RdsAccordionComponent> = (args) => ({
  props: args,
  template: `
    <rds-accordian [flush]= "flush" [id]="id">
    <accordion-item title="Section 1 title" [accordionId]="id" >
    <h3>Custom </h3>
    </accordion-item>
    <accordion-item title="Section 2 title" [accordionId]="id" >
    <h3>Custom </h3>
    </accordion-item>
  </rds-accordian>`,
});
withFlush.args = {
  flush: true,
  expand: false,
  id:"accordionWithFlush"
};
export const withOutline: Story<RdsAccordionComponent> = (args) => ({
  props: args,
  template: `
    <rds-accordian [outline]= "true">
      <accordion-item title="Section 1 title">
      this is content updated

      </accordion-item>
    </rds-accordian>
    
    <rds-accordian>
      <accordion-item title="Section 2 title">
      <h3>Custom </h3>
      </accordion-item>
    </rds-accordian>`,
});
withOutline.args = {
  expand: false,
};
