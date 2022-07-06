import { createReducer, on } from "@ngrx/store";
import { getUserFailure, getUserForEdit, getUserForEditSuccess, getUserPermission, getUserPermissionFilterList, getUserPermissionListSuccess, getUserPermissionSuccess, getUsers, getUserSuccess } from "./user.actions";
import { User } from "./user.models";


export interface UsersState {
    users: User;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const userInitialState: UsersState = {
    users: { items: [] },
    error: null,
    status: 'pending',
};
export interface EditUserSate {
    UserEditI: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const  EdirUserInitialState: EditUserSate = {
    UserEditI: {  },
    error: null,
    status: 'pending',
};
export interface EditUserPermissionSate {
    UserPermissionStateI: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const  EdirUserPermissionInitialState: EditUserPermissionSate = {
    UserPermissionStateI: { items: [] },
    error: null,
    status: 'pending',
};
export interface UserPermissionFilterState {
    UserPermissionFilterI: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
export const UserPermissionFilteritialState: UserPermissionFilterState = {
    UserPermissionFilterI: { items: [] },
    error: null,
    status: 'pending',
};
export const UserReducer = createReducer(
    // Supply the initial state
    userInitialState,
    on(getUsers, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getUserSuccess, (state, { users }) => ({
        ...state,
        users: users,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getUserFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)
export const GetUserforEdit = createReducer(
    // Supply the initial state
    EdirUserInitialState,
    on(getUserForEdit, (state) => ({ ...state, status: 'loading' })),
    on(getUserForEditSuccess, (state, { UserEditI }) => ({
        ...state,
        UserEditI: UserEditI,
        error: null,
        status: 'success',
    })),
   
)
export const GetUserPermissions = createReducer(
    // Supply the initial state
    EdirUserPermissionInitialState,
    on(getUserPermission, (state) => ({ ...state, status: 'loading' })),
    on(getUserPermissionSuccess, (state, { UserPermissionStateI }) => ({
        ...state,
        UserPermissionI: UserPermissionStateI,
        error: null,
        status: 'success',
    })),
   
)
export const UserPermissionFilterReducer = createReducer(
    // Supply the initial state
    UserPermissionFilteritialState,
    on(getUserPermissionFilterList, (state) => ({ ...state, status: 'loading' })),
    on(getUserPermissionListSuccess, (state, { UserPermissionFilterI }) => ({
        ...state,
        UserPermissionFilterI: UserPermissionFilterI,
        error: null,
        status: 'success',
    })),
   
)