import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { LanguagesState } from './language.reducer';

export const selectLanguages = (state: AppState) => state.languages;

// export const selectAllCountries = createSelector(
//     featureSelector,
//     (state: AppState) => state.countries
// );
export const selectAllLanguages = createSelector(
    selectLanguages,
    (state: LanguagesState) => state.languages
);
//export const selectLanguage = (state: AppState) => state.languages;
// export const selectAllLanguages = createSelector(
//     selectLanguage,
//     (state: LanguagesState) => state.languages
// );
export const selectAllCountries = createSelector(
    selectLanguages,
    (state: LanguagesState) => state.cultureList
);

export const selectLanguageInfo = createSelector(
    selectLanguages,
    (state: LanguagesState) => state.languageInfo
);