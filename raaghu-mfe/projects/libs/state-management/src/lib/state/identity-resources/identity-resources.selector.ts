import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { IdentityResourcesState } from './identity-resources.reducer';

export const selectIdentityResources = (state: AppState) => state.identityResources;

export const selectA = createSelector(
    selectIdentityResources,
    (state: IdentityResourcesState) => state.allIdentityResources
);
export const selectIdentityResource = createSelector(
    selectIdentityResources,
    (state: IdentityResourcesState) => state.identityResource
);
export const selectClaimTypesAll = createSelector(
    selectIdentityResources,
    (state: IdentityResourcesState) => state.claims
)