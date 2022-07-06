import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { LanguageTextsState } from './language-text.reducer';

export const selectLanguageText = (state: AppState) => state.languageText;
export const selectAllLanguageTexts = createSelector(
    selectLanguageText,
    (state: LanguageTextsState) => state.languageText
);
