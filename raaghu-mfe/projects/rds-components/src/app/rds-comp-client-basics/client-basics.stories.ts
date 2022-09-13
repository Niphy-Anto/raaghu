import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxTranslateModule } from '@libs/shared';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsCompClientBasicsComponent } from './rds-comp-client-basics.component';
import { RdsInputModule, RdsTextareaModule } from '@libs/rds-elements';

export default {
  title: 'Components/Client-Basics',
  component: RdsCompClientBasicsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule,NgxTranslateModule,RdsCheckboxModule,RdsInputModule,
        RdsTextareaModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompClientBasicsComponent> = (args: RdsCompClientBasicsComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});
Default.args={
  clientInfo:[]
}