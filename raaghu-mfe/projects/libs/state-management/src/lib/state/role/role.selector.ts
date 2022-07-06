import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, roles } from '../../app.interface';

import { RolesState,PermissionState, EditRoleSate } from './role.reducer';

export const Roleselector = createFeatureSelector<AppState>(roles);
export const selectAllRoles = createSelector(
    Roleselector,
    (state: AppState) => state.roles
);
export const selectAllPermissions = createSelector(
    Roleselector,
    (state: AppState) => state.PermissionI
);
export const selectRoleForEdit = createSelector(
    Roleselector,
    (state: AppState) => state.EditRoleSateI
);
