import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsIconModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, UserAuthService } from '@libs/shared';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RdsCompVisualSettingsComponent } from 'projects/rds-components/src/app/rds-comp-visual-settings/rds-comp-visual-settings.component';
import { RdsCompEditLanguageTextComponent } from 'projects/rds-components/src/app/rds-comp-edit-language-text/rds-comp-edit-language-text.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { StoreModule } from '@ngrx/store';

export default {
    title: 'Pages/Language Text',
    component: AppComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                RdsCompEditLanguageTextComponent,
                RdsDataTableComponent,
                RdsCompAlertComponent,
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RdsIconModule,
                RdsNavTabModule,
                RdsSelectListModule,
                RdsCheckboxModule,
                RdsButtonModule,
                RdsTextareaModule,
                RdsPaginationModule,
                CommonModule,
                StoreModule.forRoot({}),
                NgxTranslateModule.forRoot()
            ],
            providers:[
              UserAuthService

            ]
        })
    ]
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
    // props: {
    //     ...args
    // }
});

export const basic = Template.bind({});
