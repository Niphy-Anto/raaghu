import { FindOrganizationUnitRolesInput, FindOrganizationUnitUsersInput, ListResultDtoOfOrganizationUnitDto, PagedResultDtoOfNameValueDto, PagedResultDtoOfOrganizationUnitRoleListDto, PagedResultDtoOfOrganizationUnitUserListDto } from "@libs/shared";
import { createAction, props } from "@ngrx/store";

export const getOrganizationUnitTree = createAction('[Organization Unit Page] Get Organization Unit Tree');

export const getOrganizationUnitTreeSuccess = createAction(
    '[Organization Unit Page] Get Organization Unit Tree Success',
    props<{ organizationUnitTree: ListResultDtoOfOrganizationUnitDto }>()
);

export const getOrganizationUnitTreeFailure = createAction(
    '[Organization Unit Page] Get Organization Unit Tree Failure',
    props<{ error: string }>()
);


export const getOrganizationUnitMembers = createAction(
    '[Organization Unit Page] Get Organization Unit Members',
    (id: number) => ({ id })
    );

export const getOrganizationUnitMembersSuccess = createAction(
    '[Organization Unit Page] Get Organization Unit Members Success',
    props<{ organizationUnitMembers: PagedResultDtoOfOrganizationUnitUserListDto  }>()
);

export const getOrganizationUnitMembersFailure = createAction(
    '[Organization Unit Page] Get Organization Unit Members Failure',
    props<{ error: string }>()
);

export const getOrganizationUnitRoles = createAction(
    '[Organization Unit Page] Get Organization Unit Roles',
    (id: number) => ({ id })
    );

export const getOrganizationUnitRolesSuccess = createAction(
    '[Organization Unit Page] Get Organization Unit Roles Success',
    props<{ organizationUnitRoles: PagedResultDtoOfOrganizationUnitRoleListDto  }>()
);

export const getOrganizationUnitRolesFailure = createAction(
    '[Organization Unit Page] Get Organization Unit Roles Failure',
    props<{ error: string }>()
);
export const deleteUsers = createAction(
    '[Organization Unit Page] Delete Users',
    (userid: number) => ({ userid })
);
export const deleteRoles = createAction(
    '[Organization Unit Page] Delete Roles',
    (roleid: number) => ({ roleid })
);

export const getOrganizationUnitUsersList = createAction(
    '[Organization Unit Page] Get Organization Unit Users list',
    (input: FindOrganizationUnitUsersInput) => ({ input })
    );

export const getOrganizationUnitUsersListSuccess = createAction(
    '[Organization Unit Page] Get Organization Unit Users list Success',
    props<{ organizationUnitUsersList: PagedResultDtoOfNameValueDto  }>()
);

export const getOrganizationUnitUsersListFailure = createAction(
    '[Organization Unit Page] Get Organization Unit Users list Failure',
    props<{ error: string }>()
);
export const getOrganizationUnitRolesList = createAction(
    '[Organization Unit Page] Get Organization Unit Roles List',
    (input: FindOrganizationUnitRolesInput) => ({ input })
    );

export const getOrganizationUnitRolesListSuccess = createAction(
    '[Organization Unit Page] Get Organization Unit Roles List Success',
    props<{ organizationUnitRolesList: PagedResultDtoOfNameValueDto  }>()
);

export const getOrganizationUnitRolesListFailure = createAction(
    '[Organization Unit Page] Get Organization Unit Roles List Failure',
    props<{ error: string }>()
);

export const createTreeUnit = createAction(
    '[Organization Unit Page] create Organization Unit Tree',
    (data) => ( data )
    );

export const createTreeUnitSuccess = createAction(
    '[Organization Unit Page] create Organization Unit Tree Success',
);

export const createTreeUnitFailure = createAction(
    '[Organization Unit Page] create Organization Unit Tree Failure',
    props<{ error: string }>()
);

export const updateUnitTree = createAction(
    '[Organization Unit Page] Update Organization Unit Tree',
    (data) => ( data )
    );

export const updateUnitTreeSuccess = createAction(
    '[Organization Unit Page] update Organization Unit Tree Success',
);

export const updateUnitTreeFailure = createAction(
    '[Organization Unit Page] update Organization Unit Tree Failure',
    props<{ error: string }>()
);

export const deleteUnitTree = createAction(
    '[Organization Unit Page] delete Organization Unit Tree',
    (data) => ( data )
    );

export const deleteUnitTreeSuccess = createAction(
    '[Organization Unit Page] delete Organization Unit Tree Success',
);

export const deleteUnitTreeFailure = createAction(
    '[Organization Unit Page] delete Organization Unit Tree Failure',
    props<{ error: string }>()
);

export const addUsersToOrganizationUnit = createAction(
    '[Organization Unit Page] Add Member Organization Unit Tree',
    (data) => ( data )
    );

export const addUsersToOrganizationUnitSuccess = createAction(
    '[Organization Unit Page] Add Member Organization Unit Tree Success',
);

export const addUsersToOrganizationUnitFailure = createAction(
    '[Organization Unit Page] Add Member Organization Unit Tree Failure',
    props<{ error: string }>()
);

export const addRolesToOrganizationUnit = createAction(
    '[Organization Unit Page] Add Role Organization Unit Tree',
    (data) => ( data )
    );

export const addRolesToOrganizationUnitSuccess = createAction(
    '[Organization Unit Page] Add Role Organization Unit Tree Success',
);

export const addRolesToOrganizationUnitFailure = createAction(
    '[Organization Unit Page] Add Role Organization Unit Tree Failure',
    props<{ error: string }>()
);

export const deleteMemberFromOrgUnit = createAction(
    '[Organization Unit Page] Delete Member Organization Unit Tree',
    (data) => ( data )
    );

export const deleteMemberFromOrgUnitSuccess = createAction(
    '[Organization Unit Page] Delete Member Organization Unit Tree Success',
);

export const deleteMemberFromOrgUnitFailure = createAction(
    '[Organization Unit Page] Delete Member Organization Unit Tree Failure',
    props<{ error: string }>()
);

export const deleteRoleFromOrgUnit = createAction(
    '[Organization Unit Page] Delete Role Organization Unit Tree',
    (data) => ( data )
    );

export const deleteRoleFromOrgUnitSuccess = createAction(
    '[Organization Unit Page] Delete Role Organization Unit Tree Success',
);

export const deleteRoleFromOrgUnitFailure = createAction(
    '[Organization Unit Page] Delete Role Organization Unit Tree Failure',
    props<{ error: string }>()
);