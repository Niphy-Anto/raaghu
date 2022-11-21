import { createReducer, on } from "@ngrx/store";
import { getTenants, getTenantSuccess, getTenantFailure, getEditionComboboxItems, getEditionComboboxItemsSuccess, getEditionComboboxItemsFailure, getTenantForEdit, getTenantForEditSuccess, getTenantForEditFailure, getTenantFeaturesForEdit, getTenantFeaturesForEditSuccess, getTenantFeaturesForEditFailure, getTenantUsers, getTenantUsersSuccess, getTenantUsersFailure, getTenantLogin, getTenantLoginSuccess, getTenantLoginFailure } from "./tenant.actions";
import { Tenants } from "./tenant.models";


export interface TenantState {
    tenants: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const TenantInitialState: TenantState = {
    tenants: { items: [] },
    error: null,
    status: 'pending',
};
export const TenantReducer = createReducer(
    // Supply the initial state
    TenantInitialState,
    on(getTenants, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getTenantSuccess, (state, { tenants }) => ({
        ...state,
        tenants: tenants,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getTenantFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)
export interface EditionsComboboxState {
    editions: any[]
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
export const editionComboboxInitialState: EditionsComboboxState = {
    editions: [],
    error: null,
    status: 'pending',
};
export const EditionComboboxReducer = createReducer(
    editionComboboxInitialState,
    on(getEditionComboboxItems, (state) => ({ ...state, status: 'loading' })),
    on(getEditionComboboxItemsSuccess, (state, { editionComboboxItem }) => ({
        ...state,
        editions: editionComboboxItem,
        error: null,
        status: 'success',
    })),
    on(getEditionComboboxItemsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))

)


export interface TenantUsersState {
    tenantUsers: any
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const TenantUsersInitialState:  TenantUsersState = {
    tenantUsers: {},
    error: null,
    status: "pending"
};

export const TenantUsersReducer = createReducer(
    TenantUsersInitialState,
    on(getTenantUsers, (state) => ({ ...state, status: 'loading' })),
    on(getTenantUsersSuccess, (state, { tenantUsers }) => ({
        ...state,
        tenantUsers: tenantUsers,
        error: null,
        status: 'success',
    })),
    on(getTenantUsersFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))

)

export interface TenantLoginState {
    tenantLogin: any
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const TenantLoginInitialState:  TenantLoginState = {
    tenantLogin: {},
    error: null,
    status: "pending"
};

export const TenantLoginReducer = createReducer(
    TenantLoginInitialState,
    on(getTenantLogin, (state) => ({ ...state, status: 'loading' })),
    on(getTenantLoginSuccess, (state, { tenantLogin }) => ({
        ...state,
        tenantLogin: tenantLogin,
        error: null,
        status: 'success',
    })),
    on(getTenantLoginFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))

)

export interface TenantInfoState {
    tenantInfo: any
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
export const tenantInfoInitialState: TenantInfoState = {
    tenantInfo: {},
    error: null,
    status: 'pending',
};
export const TenantInfoReducer = createReducer(
    tenantInfoInitialState,
    on(getTenantForEdit, (state) => ({ ...state, status: 'loading' })),
    on(getTenantForEditSuccess, (state, { tenantInfo }) => ({
        ...state,
        tenantInfo: tenantInfo,
        error: null,
        status: 'success',
    })),
    on(getTenantForEditFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))

)
export interface TenantFeatureState {
    tenantFeature: any
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
export const tenantFeatureInitialState: TenantFeatureState = {
    tenantFeature: {},
    error: null,
    status: 'pending',
};
export const TenantFeatureReducer = createReducer(
    tenantFeatureInitialState,
    on(getTenantFeaturesForEdit, (state) => ({ ...state, status: 'loading' })),
    on(getTenantFeaturesForEditSuccess, (state, { tenantFeature }) => ({
        ...state,
        tenantFeature: tenantFeature,
        error: null,
        status: 'success',
    })),
    on(getTenantFeaturesForEditFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))

)


