export interface DynamicPropertyItem {
  propertyName: string;
  displayName: string;
  inputType: string;
  permission: string;
  tenantId: number;
  id: number
}

export interface DynamicEntityItem {
  entityFullName: string;
  dynamicPropertyName: string;
  dynamicPropertyId: number;
  tenantId: number;
  id: number
}

export interface DynamicProperty {
  items: DynamicPropertyItem[]
}

export interface DynamicEntity {
  items: DynamicEntityItem[]
}

export interface DynamicPermissionItem{
  description: string;
  displayName: string;
  isGrantedByDefault: boolean;
  level: number;
  name: string;
  parentName:string;
}

export interface DynamicPermissionData {
  items: DynamicPermissionItem[]
}

