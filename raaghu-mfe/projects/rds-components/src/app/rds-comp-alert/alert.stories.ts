import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { EventTypes, RdsCompAlertComponent } from './rds-comp-alert.component';
import { NgxTranslateModule } from '@libs/shared';
import { RdsAlertModule } from '@libs/rds-elements';

export default {
  title: 'Components/Alert',
  component: RdsCompAlertComponent,
  decorators: [
    moduleMetadata({
        
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule, NgxTranslateModule, RdsAlertModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompAlertComponent> = (args: RdsCompAlertComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});
Default.args={
 currentAlerts:  [{
    type: EventTypes,
    title:"Alert",
    message:"A simple primary alert—check it out!",
 }]
};

export const danger = Template.bind({});
danger.args={
 currentAlerts:  [{
    type: EventTypes.Error,
    title:"Alert",
    message:"A simple danger alert—check it out!",
 }]
};

export const success = Template.bind({});
success.args={
 currentAlerts:  [{
    type: EventTypes.Success,
    title:"Alert",
    message:"A simple success alert—check it out!",
 }]
};

export const info = Template.bind({});
info.args={
 currentAlerts:  [{
    type: EventTypes.Info,
    title:"Alert",
    message:"A simple info alert—check it out!",
 }]
}

export const warning = Template.bind({});
warning.args={
 currentAlerts:  [{
    type: EventTypes.Warning,
    title:"Alert",
    message:"A simple warning alert—check it out!",
 }]
}
