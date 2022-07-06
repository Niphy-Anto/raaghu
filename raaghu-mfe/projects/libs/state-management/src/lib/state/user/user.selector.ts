import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, users } from '../../app.interface';

import { UsersState } from './user.reducer';


export const Userselector = createFeatureSelector<AppState>(users);
export const selectAllUsers = createSelector(
    Userselector,
    (state: AppState) => state.users
);
export const selectUserForEdit = createSelector(
    Userselector,
    (state: AppState) => state.UserEditI
);
export const selectUserPermissionEdit = createSelector(
    Userselector,
    (state: AppState) => state.UserPermissionStateI
);
export const selectAllUserFilterPermissions = createSelector(
    Userselector,
    (state: AppState) => state.UserPermissionFilterI
);