import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsInputModule, RdsLabelModule} from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompFaqComponent } from './rds-comp-faq.component';

export default {
  title: 'Components/FAQ',
  component: RdsCompFaqComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompFaqComponent> = (args: RdsCompFaqComponent) => ({});

export const basic = Template.bind({});
