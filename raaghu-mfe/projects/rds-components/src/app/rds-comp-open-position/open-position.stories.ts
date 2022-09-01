import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule } from '@libs/shared';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsButtonModule } from '@libs/rds-button';
import { CommonModule } from '@angular/common';
import { RdsInputModule, RdsNavTabModule, RdsTextareaModule } from '@libs/rds-elements';
import { RdsCompOpenPositionComponent } from './rds-comp-open-position.component';


export default {
  title: 'Components/Open-Position',
  component: RdsCompOpenPositionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsLabelModule,
        RdsButtonModule,
        RdsNavTabModule,
        CommonModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ],
  argTypes: {
  }
} as Meta;

const Template: Story<RdsCompOpenPositionComponent> = (args: RdsCompOpenPositionComponent) => ({
  props: { ...args }
});

export const basic = Template.bind({});
basic.args = {
  itemList: [{
    titleHeader: "Open Positions",
    navtabsItems: [
      {
        label: 'Developer',
        tablink: '#Developer',
        ariacontrols: 'Developer',
      },
      {
        label: 'Marketing',
        tablink: '#Marketing',
        ariacontrols: 'Marketing',
      },
      {
        label: 'Designer',
        tablink: '#Designer',
        ariacontrols: 'Designer',
      },
      {
        label: 'Researcher',
        tablink: '#Researcher',
        ariacontrols: 'Researcher',
      }
    ],
    roleName: "Android Developer",
    discription: [
      {
        roleName: "Android Developer",
        roleDiscription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        roleName: "Android Developer",
        roleDiscription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      }],
  }],

}




