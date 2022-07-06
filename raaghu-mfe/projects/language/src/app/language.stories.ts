import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsIconModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule } from '@libs/rds-elements';
import { AlertService, NgxTranslateModule } from '@libs/shared';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RdsCompNewLanguageComponent } from 'projects/rds-components/src/app/rds-comp-new-language/rds-comp-new-language.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { StoreModule } from '@ngrx/store';
import { NewlanguageComponent } from './newlanguage/newlanguage.component';
import { Router, RouterModule } from '@angular/router';

export default {
    title: 'Pages/Language',
    component: AppComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                RdsCompNewLanguageComponent,
                RdsDataTableComponent,
                RdsCompAlertComponent,
                NewlanguageComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RdsIconModule,
                RdsNavTabModule,
                RdsSelectListModule,
                RdsCheckboxModule,
                RdsButtonModule,
                RdsInputModule,
                RdsPaginationModule,
                CommonModule,
                RouterModule,
                StoreModule.forRoot({}),
                NgxTranslateModule.forRoot()
            ],
            providers:[
                //Router,
            ]
        })
    ]
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: {
        ...args
    }
});

export const basic = Template.bind({});
basic.args = {
    languageTableHeader: [
        { displayName: 'Language Name', key: 'languageName', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
        { displayName: 'Code', key: 'countryCode', dataType: 'text', dataLength: 30, required: true, sortable: true },
        { displayName: 'Is enabled', key: 'statusTemplate', dataType: 'icon', dataLength: 30, required: true, sortable: true },
        { displayName: 'Creation Time', key: 'creationTime', dataType: 'text', dataLength: 30, required: true, sortable: true }
    ],
    languageTableData: [
        { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
        { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
        { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
        { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
        { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
        { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
        { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' }
    ],
    recordsPerpage:10,
    tableStyle:'light'
}
