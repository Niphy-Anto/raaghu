

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { SettingsState } from './settings.reducer';


export const settingsSelector = createFeatureSelector<AppState>('settings');


//export const selectSettings = (state: AppState) => state.settings;
//export const selectAllSettings = createSelector(
//    selectSettings,
//    (state: SettingsState) => state.settings
//);

export const selectAllSettings = createSelector(
  settingsSelector,
  (state: AppState) => state.settings
)

export const selectSettingsTenantPageComboboxItems = createSelector(
  settingsSelector,
  (state: AppState) => state.settingsComboboxItem
);

