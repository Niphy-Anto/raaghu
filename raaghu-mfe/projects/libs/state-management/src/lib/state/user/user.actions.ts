import { UpdateUserPermissionsInput } from "@libs/shared";
import { createAction, props } from "@ngrx/store";
import { User } from "./user.models";

export const getUsers = createAction('[User Page] Get Users',
(selectedPermissions: any) => ({ selectedPermissions }));

export const getUserSuccess = createAction(
    '[User Page] Get User Success',
    props<{ users: User }>()
);

export const getUserFailure = createAction(
    '[User Page] Get Users Failure',
    props<{ error: string }>()
);

export const saveUser = createAction(
    '[User Page] Save User',
    (user: any) => ({ user })
);
export const saveUseruccess = createAction(
    '[User Page] Save User Success', props<{ user: any }>()
);
export const getUserForEdit = createAction('[User Page] Get getUserForEdit',
(id: number|undefined) => ({ id }));

export const getUserForEditSuccess = createAction(
    '[User Page] Get user Edit Success',
    props<{ UserEditI: any }>()
);
export const getUserEditFailure = createAction(
    '[User Page] get User Edit Failure',
    props<{ error: string }>()
);
export const getUserPermission = createAction('[User Page] Get getUser Permission For Edit',
(id: number) => ({ id }));

export const getUserPermissionSuccess = createAction(
    '[User Page] Get user Edit Success',
    props<{ UserPermissionStateI: any }>()
);
export const getUsePermissionsFailure = createAction(
    '[User Page] get User Edit Failure',
    props<{ error: string }>()
);
export const UpdateUserPermission = createAction(
    '[User Page] Update User Permission',
    (Permissions: UpdateUserPermissionsInput) => ({ Permissions })
);
export const UpdateUserPermissionSuccess = createAction(
    '[User Page] Update User Permission Success', props<{ Permissions: any }>()
);
export const deleteUser = createAction(
    '[User Page] Delete Language',
    (id: number) => ({ id })
);
export const getUserPermissionFilterList = createAction('[User Page] Get Permissions For Filter');

export const getUserPermissionListSuccess = createAction(
    '[Role Page] get Permission Success',
    props<{ UserPermissionFilterI: any }>()
);