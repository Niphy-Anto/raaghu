import { createReducer, on } from '@ngrx/store';
import {
  getDynamicPropertyFailure,
  getDynamicProperty,
  getDynamicPropertySuccess,
  getDynamicEntitySuccess,
  getDynamicEntityFailure,
  getDynamicEntity,
  editDynamicEntity,
  editDynamicEntitySuccess,
  getAllEntities,
  getAllEntitiesSuccess,
  getAllPropertiesOfAnEntity,
  getAllPropertiesOfAnEntitySuccess,
  getInputTypeNames,
  getInputTypeNamesSuccess,
  getDynamicPropertyByEdit,
  getDynamicPropertyByEditSuccess,
  getPermission,
  getPermissionSuccess,
  getDynamicPropertyByEditFailure,
} from './dynamic-property.actions';
import {
  DynamicEntity,
  DynamicProperty,
  DynamicPropertyItem,
  DynamicEntityItem,
  DynamicPermissionData,
} from './dynamic-property.models';

export interface DynamicPropertyState {
  dynamicProperty: DynamicProperty;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export interface DynamicEntityState {
  dynamicEntity: DynamicEntity;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const dynamicPropertyInitialState: DynamicPropertyState = {
  dynamicProperty: { items: [] },
  error: null,
  status: 'pending',
};

export const dynamicEntityInitialState: DynamicEntityState = {
  dynamicEntity: { items: [] },
  error: null,
  status: 'pending',
};

export interface EditDynamicPropertySate {
  EditDynamicProperty: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const EditDynamicPropertyInitialSate: EditDynamicPropertySate = {
  EditDynamicProperty: {},
  error: null,
  status: 'pending',
};

export interface EditDynamicEntitySate {
  EditDynamicEntity: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const EditDynamicEntityInitialSate: EditDynamicEntitySate = {
  EditDynamicEntity: {},
  error: null,
  status: 'pending',
};

export interface AllDynamicEntitySate {
  Entities: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const AllDynamicEntityInitialSate: AllDynamicEntitySate = {
  Entities: {},
  error: null,
  status: 'pending',
};

export interface AllDynamicPropertyEntitySate {
  PropertiesEntitie: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const AllDynamicPropertyEntityInitialSate: AllDynamicPropertyEntitySate =
  {
    PropertiesEntitie: {},
    error: null,
    status: 'pending',
  };

export interface InputPropertynameState {
  InputTypeNames: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const InputPropertynameInitialSate: InputPropertynameState = {
  InputTypeNames: {},
  error: null,
  status: 'pending',
};

export interface EditDynampicPropertState {
  EditDynamicPropertSateI: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const EditDynampicPropertyInitialSate: EditDynampicPropertState = {
  EditDynamicPropertSateI: {},
  error: null,
  status: 'pending',
};

export interface DynamicPermissionState {
  DynanmicPermission: DynamicPermissionData;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}
export const DynamicPermissionInitialState: DynamicPermissionState = {
  DynanmicPermission: { items: [] },
  error: null,
  status: 'pending',
};
export const DynamicPropertyReducer = createReducer(
  // Supply the initial state
  dynamicPropertyInitialState,
  on(getDynamicProperty, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded todos
  on(getDynamicPropertySuccess, (state, { dynamicProperty }) => ({
    ...state,
    dynamicProperty: dynamicProperty,
    error: null,
    status: 'success',
  })),
  // Handle todos load failure
  on(getDynamicPropertyFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);

// All entity
export const GetAllDynamicProperty = createReducer(
  // Supply the initial state
  AllDynamicEntityInitialSate,
  on(getAllEntities, (state) => ({ ...state, status: 'loading' })),
  on(getAllEntitiesSuccess, (state, { Entities }) => ({
    ...state,
    Entities: Entities,
    error: null,
    status: 'success',
  }))
);

// All Paramaters
export const GetAllDynamicPropertyEntites = createReducer(
  // Supply the initial state
  AllDynamicPropertyEntityInitialSate,
  on(getAllPropertiesOfAnEntity, (state) => ({ ...state, status: 'loading' })),
  on(getAllPropertiesOfAnEntitySuccess, (state, { PropertiesEntitie }) => ({
    ...state,
    PropertiesEntitie: PropertiesEntitie,
    error: null,
    status: 'success',
  }))
);

export const DynamicEntityReducer = createReducer(
  // Supply the initial state
  dynamicEntityInitialState,
  on(getDynamicEntity, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded todos
  on(getDynamicEntitySuccess, (state, { dynamicEntity }) => ({
    ...state,
    dynamicEntity: dynamicEntity,
    error: null,
    status: 'success',
  })),
  // Handle todos load failure
  on(getDynamicEntityFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);

export const GetDynamicEntityEdit = createReducer(
  // Supply the initial state
  EditDynamicEntityInitialSate,
  on(editDynamicEntity, (state) => ({ ...state, status: 'loading' })),
  on(editDynamicEntitySuccess, (state, { editDynamicEntity }) => ({
    ...state,
    DynamicEntity: editDynamicEntity,
    error: null,
    status: 'success',
  }))
);
export const GetInputnameReducer = createReducer(
  // Supply the initial state
  InputPropertynameInitialSate,
  on(getInputTypeNames, (state) => ({ ...state, status: 'loading' })),
  on(getInputTypeNamesSuccess, (state, { InputTypeNames }) => ({
    ...state,
    InputTypeNames: InputTypeNames,
    error: null,
    status: 'success',
  }))
);


export const getDynamicPropertyByEditReducer = createReducer(
  EditDynampicPropertyInitialSate,
  on(getDynamicPropertyByEdit, (state) => ({ ...state, status: 'loading' })),
  on(getDynamicPropertyByEditSuccess, (state, { EditDynamicPropertSateI }) => ({
      ...state,
      EditDynamicPropertSateI: EditDynamicPropertSateI,
      error: null,
      status: 'success',
  })),
  on(getDynamicPropertyByEditFailure, (state, { error }) => ({
      ...state,
      error: error,
      status: 'error',
  }))

)

export const DynamicPermissionReducer = createReducer(
  // Supply the initial state
  DynamicPermissionInitialState,
  on(getPermission, (state) => ({ ...state, status: 'loading' })),
  on(getPermissionSuccess, (state, { DynanmicPermission }) => ({
    ...state,
    DynanmicPermission: DynanmicPermission,
    error: null,
    status: 'success',
  }))
);
