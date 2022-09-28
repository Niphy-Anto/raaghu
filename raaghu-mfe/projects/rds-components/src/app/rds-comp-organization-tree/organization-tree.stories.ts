
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsOrganizationTreeComponent } from './rds-comp-organization-tree.component';
import { OrganizationTreeNode, OrganizationTreeLabeles, OrganizationTreeType } from '../../models/organization-tree.model';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsIconModule } from '@libs/rds-icon';

export default {
  title: 'Components/Organization Tree',
  component: RdsOrganizationTreeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsCheckboxModule, RdsOffcanvasModule, RdsInputModule, NgxTranslateModule, RdsIconModule, SharedModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsOrganizationTreeComponent> = (args: RdsOrganizationTreeComponent) => ({
  props: {
    ...args

  },
});

export const Default = Template.bind({});

Default.args = {
   organizationTreeData : [{
    "data": {
      "parentId": null,
      "code": "00001",
      "displayName": null,
      "memberCount": 1,
      "roleCount": 3,
      "lastModificationTime": "2022-05-06T00:08:34.702+05:30",
      "lastModifierUserId": 6,
      "creationTime": "2022-04-29T11:43:17.223+05:30",
      "creatorUserId": 1,
      "id": 1
    },
    "level": 1,
    "selected": false,
    "label": "waii",
    "expandedIcon": "fa fa-folder-open text-warning",
    "collapsedIcon": "fa fa-folder text-warning",
    "expanded": true,
  }],

  nodeColor: ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'],
  mutable: true,
  OrganizationTreeType: {
    IconLabel: true,
    Normal: false,
    checkbox: false,

  },
  OrganizationTreeLabeles: {
    ParentItemPlaceholder: "Parent node",
    ChildItemPlaceholder: "Child Node",
    ParentDescriptionPlaceholder: "Parent label",
    ChildDescriptionPlaceholder: "Child label",
    ParentNodeTitle: "Parent Node Title",
    ChildNodeTitle: "Child node Title",
  },
  ButtonLabel: 'New Node',
};
