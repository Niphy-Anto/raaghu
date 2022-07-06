import { Component, Injector, OnInit } from '@angular/core';
import { ComponentLoaderOptions,MfeBaseComponent } from '@libs/shared';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';

@Component({
  selector: 'app-multiple-mfe',
  templateUrl: './multiple-mfe.component.html',
  styleUrls: ['./multiple-mfe.component.css'],
})
export class MultipleMfeComponent extends  MfeBaseComponent implements OnInit   {
  constructor( private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void { }

  tableHeaders:TableHeader[] = [{ displayName: 'Edition Name', key: 'editionName', dataType: 'text', dataLength: 30, required: true, sortable: true }, { displayName: 'Price ($)', key: 'price', dataType: 'number', dataLength: 5, required: false, sortable: true }, { displayName: 'Trial Period(Day(s))', key: 'trialPeriod', dataType: 'number', dataLength: 5, required: true }, { displayName: 'Expiring Edition', key: 'expiringEdition', dataType: 'text', dataLength: 30, required: true }];
  tableData = [
    { id: 1, editionName: 'Standard', price: 60, trialPeriod: 5},
    { id: 2, editionName: 'Basic', price: 120, trialPeriod: 10},
    { id: 3, editionName: 'Premium', price: 250, trialPeriod: 5},
    { id: 4, editionName: 'Standard', price: 60, trialPeriod: 7},
    { id: 5, editionName: 'Basic', price: 100, trialPeriod: 15},
    { id: 6, editionName: 'Standard', price: 60, trialPeriod: 5},
    { id: 7, editionName: 'Premium', price: 100, trialPeriod: 47},
    { id: 8, editionName: 'Standard', price: 100, trialPeriod: 53},
    { id: 9, editionName: 'Standard', price: 100, trialPeriod: 35},
    { id: 10, editionName: 'Basic', price: 100, trialPeriod: 35},
    { id: 11, editionName: 'Premium', price: 100, trialPeriod: 95},
    { id: 12, editionName: 'Standard', price: 100, trialPeriod: 75},
    { id: 13, editionName: 'Premium', price: 100, trialPeriod: 15},
    { id: 14, editionName: 'Basic', price: 100, trialPeriod: 45},
    { id: 15, editionName: 'Standard', price: 100, trialPeriod: 3},
    { id: 16, editionName: 'Basic', price: 100, trialPeriod: 1},

  ]

   // Organization unit required data

   organizationTreeData:OrganizationTreeNode[]= [
    new OrganizationTreeNode("WaiIndia",'Wai India', 1, 
    [new OrganizationTreeNode("WaiPune",'Wai Pune', 2, [],true),
      new OrganizationTreeNode("WaiNagar",'Wai Nagar', 2, [],true),
    ],true),
    new OrganizationTreeNode("WaiUSA",'Wai USA', 1, 
    [new OrganizationTreeNode("WaiTexas",'Wai Texas', 2, 
    [],true)],true),
    ]
    
    OrganizationTreeType:any={
    IconLabel:true,
    Normal:false,
    checkbox: false,
    }
    OrganizationTreeLabeles:any={
    ParentItemPlaceholder: "Parent node",
    ChildItemPlaceholder:  "Child Node",
    ParentDescriptionPlaceholder: "Parent label",
    ChildDescriptionPlaceholder:  "Child label",
    ParentNodeTitle:  "Parent Node Title",
    ChildNodeTitle:  "Child node Title",
    }
    
  nodeColor= ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  
  ProfilUrl:string="assets/MaskGroup.png"
  navtabItems:any= [
    { label: 'Manage Linked Accounts', tablink: '#nav-LinkAccount',ariacontrols:'nav-LinkAccount' },
    { label: 'Manage Authority Deligation', tablink: '#nav-Deligation',ariacontrols:'nav-Deligation' },
    { label: 'Login Attempts', tablink: '#nav-Attempts',ariacontrols:'nav-Attempts' },
    { label: 'My Settings', tablink: '#nav-Settings', ariacontrols:'nav-Settings' },
    { label: 'DownLoad Collected Data', tablink: '#nav-DownLoad', ariacontrols:'nav-DownLoad' },
    ]
    userdata: any = {
      ProfileName: "Test",
     EmailAddress: "",
      UserName: "Neilsss",
     CurrentPassword: "",
     NewPassword: "",
    ConFNewPassword:"",
   }
   DeligateUser:any={
    TableHeader:[{ displayName: 'User Name', key: 'UserName', dataType: 'text', dataLength: 30, required: true },
    { displayName: 'Start Time', key: 'StartTime', dataType: 'text', dataLength: 30, required: true },
    { displayName: 'End Time', key: 'EndTime', dataType: 'text', dataLength: 30, required: true }],
    UserDeligatesData:[{UserName: 'Standard',StartTime:'10-12-1992',EndTime:'12-10-1992'}]
  }
  linkedAccount:any={
    TableHeader:[{ displayName: 'User Name', key: 'userName', dataType: 'text', dataLength: 30, required: true }],
    LinkedAccounts:[{userName: 'Standard'}]
  }
  LoginAttempts:any={
    TableHeader:[
    { displayName: 'IP Address', key: 'IpAddress', dataType: 'text', dataLength: 30, required: true },
    { displayName: 'Client', key: 'Client', dataType: 'text', dataLength: 30, required: true },
    { displayName: 'Browser', key: 'Browser', dataType: 'text', dataLength: 30, required: true },
    { displayName: 'Date&Time', key: 'DateAndTime', dataType: 'text', dataLength: 30, required: true },
    { displayName: 'Result', key: 'Result', dataType: 'text', dataLength: 30, required: true }],
    LoginDatatable:[{IpAddress: '106.212.19.28',Client:'mobile',Browser:'chrome',DateAndTime:'12-10-1992',Result:'Success'},
    {IpAddress: '106.212.19.28',Client:'mobile',Browser:'chrome',DateAndTime:'12-10-1992',Result:'invaliduser'},
    {IpAddress: '106.212.19.28',Client:'mobile',Browser:'chrome',DateAndTime:'12-10-1992',Result:'Success'},
    {IpAddress: '106.212.19.28',Client:'mobile',Browser:'chrome',DateAndTime:'12-10-1992',Result:'invaliduser'},
    {IpAddress: '212.19.28',Client:'mobile',Browser:'chrome',DateAndTime:'12-10-1992',Result:'invaliduser'},
    {IpAddress: '106.212.19.28',Client:'mobile',Browser:'chrome',DateAndTime:'12-10-1992',Result:'Success'},
    {IpAddress: '106.212.19.28',Client:'mobile',Browser:'chrome',DateAndTime:'12-10-1992',Result:'invaliduser'}]
  }
  listItems: any[]=  [{ value: 'All', some: 'All', status: 'All', isSelected:false }, 
{ value: 'Success', some: 'Success', status: 'Success', isSelected:false }, 
{ value: 'invaliduser', some: 'Invalid Username or email Address ', status: 'invaliduser', isSelected:false },
 { value: 'Invalidpassword', some: 'Invalid Password', status: 'Invalidpassword', isSelected:false },
 { value: 'notActiveuser', some: 'User is Not Active', status: 'notActiveuser', isSelected:false },
 { value: 'invalidTenancy', some: 'Invalid Tenancy name', status: 'invalidTenancy', isSelected:false }]
 listusename:any[]=[
  { value: 'Admin1', some: 'Admin', status: 'All', isSelected:false }, 
  { value: 'jack', some: 'jack1', status: 'jack1', isSelected:false }, 
  { value: 'John', some: 'John', status: 'John', isSelected:false },
   { value: 'Niel', some: 'Niel', status: 'Niel', isSelected:false },
 ]
 dounloadata:any[]=[
  { DateofData: '08/07/2022', NummberofDates: '5days ago',downloadUrl:'assets/Group.jpg' },
  {DateofData: '08/07/2022', NummberofDates: '5days ago',downloadUrl:'assets/DeleteIcon.jpg'  },
  { DateofData: '08/07/2022', NummberofDates: '5days ago',downloadUrl:'assets/Photp.jpeg' }
]
TreeNodeLabeles:any={

  ParentItemPlaceholder: "Parent node",
  ChildItemPlaceholder:  "Child Node",
  ParentDescriptionPlaceholder: "Parent label",
  ChildDescriptionPlaceholder:  "Child label",
  ParentNodeTitle:  "Parent Node Title",
  ChildNodeTitle:  "Child node Title",

}
TreeType:any={
  IconLabel:true,
  Normal:false,
  checkbox: false,
 
}
nodeColors= ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
treeData:TreeNode[]= [
  new TreeNode("L1N1",'L1-N1', 1, [
    new TreeNode("L1N2",'L1-N2', 2, [new TreeNode("L1N3",'L1-N3', 2, [new TreeNode("L1N4",'L1-N4', 2, [],"",true)],"",false)],"",true)
  ],"",true),
  new TreeNode("L2N1",'L2-N1', 1, [new TreeNode("L2N2",'L2-N2', 2, [new TreeNode("L2N3",'L2-N3', 2, [],true)],true)],true),
]
Edition: any[] = [{
  EditionName: "Normal",
  EditionTitle:"Offer you will never miss",
  Price:"280",
  Plan: "PerMonth",
  features: ["testing","testerrr","trkfajfbskdljfhsilu"],
},
{
  EditionName: "Basicd",
  EditionTitle:"Offer you will never miss",
  Price:"150",
  Plan: "PerMonth",
  features: ["testing","testerrr","trkfajfbskdljfhsilu"],
},
{
  EditionName: "Premium",
  EditionTitle:"Offer you will never miss",
  Price:"5570",
  Plan: "PerMonth ",
  features: ["testing","testerrr","trkfajfbskdljfhsilu"],
}]
subscription: any[] = [{
  name: "Normal",
  price:"400",
  duration:"18000",
  iconurl: "assets/Group.jpg",
  recommended:false,
  features: ["testing","testerrr","trkfajfbskdljfhsilu"],
},
{
  name: "Basic",
  price:"5017",
  duration:"18000",
  iconurl: "assets/Group.jpg",
  recommended:true,
  features: ["testing","testerrr","trkfajfbskdljfhsilu"],
},
{
  name: "Premium",
  price:"40044",
  duration:"18000",
  iconurl: "assets/Group.jpg",
  recommended:false,
  features: ["testing","testerrr","trkfajfbskdljfhsilu"],
}]
  rdsLoginMfeConfig: ComponentLoaderOptions = {
    name: 'RdsLogin',
    input: {
      rememeberMe: true,
    },
  };
 

  rdsAddressInputMfeConfig: ComponentLoaderOptions = {
    name: 'RdsAddressInput',
  };
  rdsWidgetMfeConfig: ComponentLoaderOptions = {
    name: 'RdsWidget',
  };
  rdsForgotPasswordMfeConfig: ComponentLoaderOptions = {
    name: 'RdsForgotPassword',
  };
  rdsDataTableMfeConfig: ComponentLoaderOptions = {
    name: 'RdsDataTable',
    input: {
      tableData: this.tableData,
      tableHeaders: this.tableHeaders,
      recordsPerPage: 10,
      width: '100%',
      pagination: true,
      actions: [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }],
    }

  };
  rdsProfileMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompProfile',
    input: {
      MenuItems: this.navtabItems,
      ProfileData: this.userdata,
      UserDeligateTable: this.DeligateUser,
      LinkedAccountTable: this.linkedAccount,
      LoginAttemptTable:this.LoginAttempts,
      listItemsResult: this.listItems,
      Usernamefilter:this.listusename,
      DownloadTable:this.dounloadata,
      Profileurl:this.ProfilUrl
    },

output: {  LinkAccountSave : (eventData) => { console.log(eventData) } }
 };
 rdsEditionConfig: ComponentLoaderOptions = {
  name: 'RdsCompEdition',
  input:{
    topLineWidth:"0",
    bodybackGroundColor:"#fff",
    topLinePadding:"0",
    cardBorderWidth:"1",
    EditionData:this.Edition,
    borderRadious:"0",
    Paddig:"5",
    borderwidth:"0"
  }
  };
  rdsSubcriptionConfig: ComponentLoaderOptions = {
    name: 'RdsCompSubscription',
    input:{
      topLineWidth:"0",
      HeaderbackGroundColor:"#7E99E1",
      bodybackGroundColor:"#DFE5F6",
      footerbackGroundColor:"#DFE5F6", 
      topLinePadding:"0",
      cardBorderWidth:"1",
      subscriptionData:this.subscription,
      borderRadious:"0",
      Paddig:"5",
      borderwidth:"0"
    },
    output: {  onSubcribe : (eventData) => { console.log(eventData) } }
    };
   rdshierarchyConfig: ComponentLoaderOptions = {
      name: 'RdsCompHierarchy',
      input:{
        treeData:this.treeData,
        nodeColors:this.nodeColors,
        mutable:true,
        TreeType:this.TreeType, 
        TreeNodeLabeles:this.TreeNodeLabeles,
        ButtonLabel:"New Node",
      },
      output: {  onChildSave : (ChildeventData) => { console.log(ChildeventData) },
      onParentSave:(ParenteventData)=> { console.log(ParenteventData) },  
      onSelectAll:(onSelectAllevent)=> { console.log(onSelectAllevent) }, 
      onSelectnode:(onSelectnodeevent)=> { console.log(onSelectnodeevent) }, 
      }
      }; 
     

      rdsOrganizationTreeMfeConfig: ComponentLoaderOptions = {
        name: 'RdsOrganizationTree',
        input:{
          organizationTreeData:this.organizationTreeData,
          nodeColor:this.nodeColor,
          mutable:true,
          OrganizationTreeType:this.OrganizationTreeType, 
          OrganizationTreeLabeles:this.OrganizationTreeLabeles,
          ButtonLabel:"SUB-UNIT",
        },
        output: {  onChildSave : (ChildeventData) => { console.log(ChildeventData) },
        onParentSave:(ParenteventData)=> { console.log(ParenteventData) },  
        onSelectAll:(onSelectAllevent)=> { console.log(onSelectAllevent) }, 
        onSelectnode:(onSelectnodeevent)=> { console.log(onSelectnodeevent) }, 
        }
        };
    
  
  
  color: string = '#8d9ba9';
  backgroundColor: string = '#abdbe3';

  rdsTopNavigationMfeConfig: ComponentLoaderOptions = {
    name: 'RdsTopNavigation',
    input: {
      backgroundColor: this.backgroundColor
    }
  };


  redirectPath(event: any) {

    var path = event.detail;

    // this.router.navigateByUrl(path);


  }

  
  rdsNotificationMfeConfig: ComponentLoaderOptions = {
    name: 'RdsNotification',
  };
  rdsUserDelegationsMfeConfig: ComponentLoaderOptions = {
    name: 'RdsUserDelegations',
  };

  rdsMySettingsMfeConfig: ComponentLoaderOptions = {
    name: 'RdsMysettings',
  };
  rdsLoginAttemtsMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompLoginAttempts',
    input: {
      LoginAttemptTable:this.LoginAttempts,
      listItemsResult:this.listItems,
    }
  };


  

 
}
export class TreeNode {
  constructor(
   public ItemCode: string,
   public ItemDescription: string,
  public level: number,
  public children: TreeNode[] = [],
  public Data:any,
  public selected: boolean = false
  ) {}
}


export class OrganizationTreeNode {
  constructor(
  public ItemCode: string,
  public ItemDescription: string,
  public level: number,
  public children: OrganizationTreeNode[] = [],
  public Data:any,
  public selected: boolean = false
  ) {}
  }