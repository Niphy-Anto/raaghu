import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAccordionModule, RdsButtonModule, RdsCardModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';
import { RdsCompClientResourcesComponent } from './rds-comp-client-resources.component';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCheckboxModule } from '@libs/rds-checkbox';


export default {
  title: 'Components/Client Resource',
  component: RdsCompClientResourcesComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule,NgxTranslateModule,RdsCheckboxModule,RdsAccordionModule,
      ],
      providers:[
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompClientResourcesComponent> = (args: RdsCompClientResourcesComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});

Default.args = {

    resources: 
        {
          displayName: 'A - E',
          selected: false,
          children: [{
            displayName: 'Availability',
            selected: false
          },
          {
            displayName: 'Apiopolis',
            selected: false
          },
          {
            displayName: 'Apigenix',
            selected: false
          },
          {
            displayName: 'Best Selector',
            selected: false
          },
          {
            displayName: 'Best Selector',
            selected: false
          },
          {
            displayName: 'Creative',
            selected: false
          },
          {
            displayName: 'ALT Genix Api',
            selected: false
          },
          {
            displayName: 'Dev Support Api',
            selected: false
          }
          ]
        }
      
}