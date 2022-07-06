import { createAction, props } from '@ngrx/store';
import {
  DynamicEntity,
  DynamicProperty,
  DynamicPermissionData,
} from './dynamic-property.models';

export const getDynamicProperty = createAction(
  '[Dynamic Property Page] Get Dynamic Property'
);
export const getDynamicPropertySuccess = createAction(
  '[Dynamic Property Page] Get Dynamic Property Success',
  props<{ dynamicProperty: DynamicProperty }>()
);
export const getDynamicPropertyFailure = createAction(
  '[Dynamic Property Page] Get Dynamic Property Failure',
  props<{ error: string }>()
);
export const deleteDynamicProperty = createAction(
  '[Dynamic Property Page] Delete Dynamic Property',
  (id: number) => ({ id })
);
// Edit Dynamic property page
export const UpdateDynamicProperty = createAction(
  '[Dynamic Property Page] Edit Dynamic Property',
  (data: any) => ({ data })
);
// get permission
export const getPermission = createAction(
  '[Dynamic Property Page] Get Permissions'
);
export const getPermissionSuccess = createAction(
  '[Dynamic Property Page Page] Get Permission Success',
  props<{ DynanmicPermission: DynamicPermissionData }>()
);
// save dynamic property
export const saveDynamicProperty = createAction(
  '[Dynamic Property Page] Save Dynamic Property',
  (DynamicProperty: any) => ({ DynamicProperty })
);
export const getDynamicEntity = createAction(
  '[Dynamic Entity Page] Get Dynamic Entity'
);
export const getDynamicEntitySuccess = createAction(
  '[Dynamic Entity Page] Get Dynamic Entity Success',
  props<{ dynamicEntity: DynamicEntity }>()
);

export const getDynamicEntityFailure = createAction(
  '[Dynamic Entity Page] Get Dynamic Entity Failure',
  props<{ error: string }>()
);
export const deleteDynamicEntity = createAction(
  '[Dynamic Entity Page] Delete Dynamic Entity',
  (id: number) => ({ id })
);
export const saveDynamicEntity = createAction(
  '[Dynamic Property Page] Save Dynamic Entity',
  (DynamicEntity: any) => ({ DynamicEntity })
);
// Edit Dynamic Entity page
export const editDynamicEntity = createAction(
  '[Dynamic Property Page] Edit Dynamic Entity',
  (dataEntity: any) => ({ dataEntity })
);
export const editDynamicEntitySuccess = createAction(
  '[Dynamic Entity Page] Edit Dynamic Entity Success',
  props<{ editDynamicEntity: any }>()
);
export const editDynamicEntityFailure = createAction(
  '[Dynamic Entity Page] Edit Dynamic Entity Failure',
  props<{ error: string }>()
);

// for select entity

export const getAllEntities = createAction(
  '[Dynamic Entity Page] Get All Entities'
);

export const getAllEntitiesSuccess = createAction(
  '[Dynamic Entity Page]Get All Entities Success',
  props<{ Entities: any }>()
);

export const getAllEntitiesFailure = createAction(
  '[Dynamic Entity Page] Get All Entities Failure',
  props<{ error: string }>()
);

// for select paramaters
export const getAllPropertiesOfAnEntitySuccess = createAction(
  '[Dynamic Entity Page]Get Get All Properties Of An Entity Success',
  props<{ PropertiesEntitie: any }>()
);

export const getAllPropertiesOfAnEntityFailure = createAction(
  '[Dynamic Entity Page] Get All Properties Failure',
  props<{ error: string }>()
);
export const getAllPropertiesOfAnEntity = createAction(
  '[Dynamic Entity Page] Get get All Properties Of An Entity',

  (entityFullName: string | undefined) => ({ entityFullName })
);

export const getInputTypeNames = createAction(
  '[Dynamic Property Page] Get Input TypeName'
);
export const getInputTypeNamesSuccess = createAction(
  '[Dynamic Property Page] Get InputTypeName Success',
  props<{ InputTypeNames: any }>()
);

export const getInputTypeNamesFailure = createAction(
  '[Dynamic Property Page] Get InputTypeName Failure',
  props<{ error: string }>()
);

export const getDynamicPropertyByEdit = createAction(
  '[Dynamic Property Page] Get Dynamic Property By Edit',
  (id: number) => ({ id })
);

export const getDynamicPropertyByEditSuccess = createAction(
  '[Dynamic Property Page] Get Dynamic Property By Edit Success',
  props<{ EditDynamicPropertSateI: any }>()
);
export const getDynamicPropertyByEditFailure = createAction(
  '[Dynamic Property Page] Get Dynamic propery By Edit Failure',
  props<{ error: string }>()
);
