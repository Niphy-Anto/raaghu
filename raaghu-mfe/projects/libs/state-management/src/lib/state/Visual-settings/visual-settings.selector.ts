import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, visualsettings } from '../../app.interface';
import { VisualsettingsState } from './visual-settings.reducer';

export const selectVisualsettings = createFeatureSelector<AppState>(visualsettings);
export const selectAllVisualsettings = createSelector(
    selectVisualsettings,
    (state: AppState) => state.visualsettings
);