export interface RoleItem {
    displayName: string;
    name: string;
    
  }
  
  export interface Role {
    items: RoleItem[]
  }
  export interface PostRole {
    displayName: string;
    name: string
  }

  export interface PermissionDataItem{
    description: string;
    displayName: string;
    isGrantedByDefault: boolean;
    level: number;
    name: string;
    parentName:string;
  }
  export interface PermissionData {
    items: PermissionDataItem[]
  }
  