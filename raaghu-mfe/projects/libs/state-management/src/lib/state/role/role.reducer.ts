import { createReducer, on } from "@ngrx/store";
import { getPermission, getPermissionSuccess, getRolByEdit, getRolByEditSuccess, getRoleFailure, getRoles, getRoleSuccess } from "./role.actions";
import { PermissionData, Role } from "./role.models";


export interface RolesState {
    roles: any;
    PermissionI: any;
    EditRoleSateI: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
// export interface PermissionState {
//     
//     error: string;
//     status: 'pending' | 'loading' | 'error' | 'success';
// }
export const roleInitialState: RolesState = {
    roles: null,
    PermissionI: null,
    EditRoleSateI:null,
    error: null,
    status: 'pending',
};

export const RoleReducer = createReducer(
    // Supply the initial state
    roleInitialState,
    on(getRoles, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getRoleSuccess, (state, { roles }) => ({
        ...state,
        roles: roles,
        error: null,
        status: 'success',
    })),

    on(getRoleFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getPermission, (state) => ({ ...state, status: 'loading' })),
    on(getPermissionSuccess, (state, { PermissionI }) => ({
        ...state,
        PermissionI: PermissionI,
        error: null,
        status: 'success',
    })),
    on(getRolByEdit, (state) => ({ ...state, status: 'loading' })),
    on(getRolByEditSuccess, (state, { EditRoleSateI }) => ({
        ...state,
        RoleEditI: EditRoleSateI,
        error: null,
        status: 'success',
    })),
   
)


