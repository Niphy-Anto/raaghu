
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompAppDetailsComponent } from './rds-comp-app-details.component';
import { RdsAppDetailsModule } from 'projects/libs/rds-elements/src/rds-app-details/src/public-api';

export default {
  title: 'Components/App details',
  component: RdsCompAppDetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsInputModule, NgxTranslateModule, RdsLabelModule,RdsAppDetailsModule,RdsCheckboxModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompAppDetailsComponent> = (args: RdsCompAppDetailsComponent) => ({
    props:args
});

export const basic = Template.bind({});
basic.args={appDetailList:[
    { 
        title: 'Zapier', subtitle: 'Build custom automation and intefrations with app', icon: 'zapier', route: '/home'
       },
       { 
        title: 'Zapier', subtitle: 'Build custom automation and intefrations with app', icon: 'avatar', route: '/home'
       },
       { 
        title: 'Zapier', subtitle: 'Build custom automation and intefrations with app', icon: 'avatar', route: '/home'
       },
       { 
        title: 'Zapier', subtitle: 'Build custom automation and intefrations with app', icon: 'avatar', route: '/home'
       }]
    }
