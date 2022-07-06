import { Story, Meta } from '@storybook/angular';
import { RdsOffcanvasComponent } from './rds-offcanvas.component';

export default {
  title: 'Elements/Offcanvas',
  component: RdsOffcanvasComponent,
  argTypes: {
    onShow: { click: "clicked" },
    onClose: { click: "clicked" },
    colorVariant: {
      options: [ 'light'],
      control: { type: 'select' }
    },
  },
} as Meta;
const Template: Story<RdsOffcanvasComponent> = (args: RdsOffcanvasComponent) => ({
  props: args,
});
export const basic: Story<RdsOffcanvasComponent> = (args) => ({
  props: args,
  template:
    `
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#canvasExample"
    aria-controls="canvasExample" (click)="onShow.emit($event)">
   Button
  </button>
  <rds-offcanvas>
  </rds-offcanvas>
    `,

});
basic.args = {
  backDrop: true,
  scrolling: true,
  offId:'canvasExample',
  canvasTitle:'Offcanvas Title',
  placement:'end'
};

// export const basic = Template.bind({});
// basic.args = {
//   // offId:'canvas1',
//   backDrop: true,
//   scrolling: true,
//   buttonTitle: 'Button'
// }
