
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsFileUploaderModule, RdsInputModule, RdsTextEditorModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsSelectListModule } from '@libs/rds-select-list';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompPersonalInfoComponent } from './rds-comp-personal-info.component';


export default {
    title: 'Components/ Personal Info',
    component: RdsCompPersonalInfoComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompPersonalInfoComponent],
            imports: [
                CommonModule,
                FormsModule,
                RdsLabelModule,
                RdsInputModule,
                RdsAvatarModule,
                RdsFileUploaderModule,
                RdsSelectListModule,
                RdsButtonModule,
                RdsTextEditorModule
            ]
        })
    ]
} as Meta;


const Template: Story<RdsCompPersonalInfoComponent> = (args: RdsCompPersonalInfoComponent) => ({
    props: args
});

export const personalInfo = Template.bind({});
