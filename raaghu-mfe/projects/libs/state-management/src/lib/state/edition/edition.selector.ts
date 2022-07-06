import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { EditionsState } from './edition.reducer';

export const editionSelector = createFeatureSelector<AppState>('editions');

export const selectAllEditions = createSelector(
    editionSelector,
    (state: AppState) => state.editions
);
export const selectEditionInfo = createSelector(
    editionSelector,
    (state: AppState) => state.editionInfo
);

export const selectEditionPageComboboxItems = createSelector(
  editionSelector,
  (state: AppState) => state.editionComboboxItem
);

export const selectTenant = createSelector(
  editionSelector,
  (state: AppState) => state.tenantCount
);
