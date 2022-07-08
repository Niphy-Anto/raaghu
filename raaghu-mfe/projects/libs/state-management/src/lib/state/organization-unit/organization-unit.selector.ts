import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { OrganizationUnitState } from './organization-unit.reducer';

export const selectOrganizationUnit = (state: AppState) => state.organizationUnit;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;

export const selectOrganizationUnitTree = createSelector(
    selectOrganizationUnit,
    (state: OrganizationUnitState) => state.organizationUnitTree
);
export const selectOrganizationUnitMembers = createSelector(
    selectOrganizationUnit,
    (state: OrganizationUnitState) => state.members
);
export const selectOrganizationUnitRoles = createSelector(
    selectOrganizationUnit,
    (state: OrganizationUnitState) => state.roles
);

export const selectOrganizationUnitUsersList = createSelector(
    selectOrganizationUnit,
    (state: OrganizationUnitState) => state.usersList
);

export const selectOrganizationUnitRolesList = createSelector(
    selectOrganizationUnit,
    (state: OrganizationUnitState) => state.rolesList
);
