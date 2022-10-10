import { createAction, props } from "@ngrx/store";


export const getRoles = createAction('[Role Page] Get Roles');

export const getRoleSuccess = createAction(
    '[Role Page] Get Role Success',
    props<{ roles: any }>()
);

export const getRoleFailure = createAction(
    '[Role Page] Get Roles Failure',
    props<{ error: string }>()
);

export const getAllClaimTypes = createAction('[Role Page] Get All Claim Types');

export const getAllClaimTypesSuccess = createAction(
    '[Role Page] Get All Claim Types Success',
    props<{ allClaimTypes: any }>()
);

export const getAllClaimTypesFailure = createAction(
    '[Role Page] Get All Claim Types Failure',
    props<{ error: string }>()
);

export const getClaimTypes = createAction('[Role Page] Get Claim Types',
(id: any) => ({ id }));

export const getClaimTypesSuccess = createAction(
    '[Role Page] Get Claim Types Success',
    props<{ claimTypes: any }>()
);

export const getClaimTypesFailure = createAction(
    '[Role Page] Get Claim Types Failure',
    props<{ error: string }>()
);


export const saveRole = createAction(
    '[Role Page] Save Role',
    (role: any) => ({ role })
);


export const getPermission = createAction('[Role Page] Get Permissions',(id: any) => ({ id }));

export const getPermissionSuccess = createAction(
    '[Role Page] get Permission Success',
    props<{ PermissionI: any }>()
);
export const deleteRole = createAction(
    '[Role Page] Delete Role',
    (id: any) => ({ id })
);

export const getRolByEdit = createAction('[Role Page] Get RolByEdit',
(id: any) => ({ id }));

export const getRolByEditSuccess = createAction(
    '[Role Page] get Rol ByEdit Success',
    props<{ EditRoleSateI: any }>()
);
export const getRolByEditFailure = createAction(
    '[Role Page] Get Role By EditF Failure',
    props<{ error: string }>()
);