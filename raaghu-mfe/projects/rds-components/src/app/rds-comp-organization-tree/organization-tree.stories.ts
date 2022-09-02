
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsOrganizationTreeComponent } from './rds-comp-organization-tree.component';
import { OrganizationTreeNode, OrganizationTreeLabeles, OrganizationTreeType} from '../../models/organization-tree.model';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/Organization Tree',
  component: RdsOrganizationTreeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsCheckboxModule, RdsOffcanvasModule, RdsInputModule, NgxTranslateModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ] 
} as Meta;

const Template: Story<RdsOrganizationTreeComponent> = (args: RdsOrganizationTreeComponent) => ({
    props:{
        ...args

    },    
});

export const basic = Template.bind({});
  
basic.args = {
    organizationTreeData: [
    new OrganizationTreeNode("WaiIndia",'Wai India', 1, 'WaiPune',
    [new OrganizationTreeNode("WaiPune",'Wai Pune', 2, '', [],true),
      new OrganizationTreeNode("WaiNagar",'Wai Nagar', 2, '', [],true),
    ],true),
    new OrganizationTreeNode("WaiUSA",'Wai USA', 1, 'WaiTexas',
    [new OrganizationTreeNode("WaiTexas",'Wai Texas', 2, '',
    [],true)],true),
    ],
  
   nodeColor:['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'],
   mutable:true,
   OrganizationTreeType:{
   IconLabel:true,
   Normal:false,
   checkbox: false,
   
  }, 
  OrganizationTreeLabeles:{
    ParentItemPlaceholder: "Parent node",
    ChildItemPlaceholder:  "Child Node",
    ParentDescriptionPlaceholder: "Parent label",
    ChildDescriptionPlaceholder:  "Child label",
    ParentNodeTitle:  "Parent Node Title",
    ChildNodeTitle:  "Child node Title",
  },
  ButtonLabel:'New Node',
};
