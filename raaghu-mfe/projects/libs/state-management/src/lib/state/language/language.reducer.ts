import { createReducer, on } from "@ngrx/store";
import { getCountryList, getCountryListFailure, getCountryListSuccess, getLanguageFailure, getLanguages, getLanguageSuccess, setDefaultLanguage, setDefaultLanguageForUI } from "./language.actions";
import { Countries, Language } from "./language.models";

export interface LanguagesState {
    languages: Language;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export interface CountryState {
    countries: Countries;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export interface DefaultLanguageState {
    defaultLanguage: string;
}

export const languageInitialState: LanguagesState = {
    languages: { items: [] },
    error: null,
    status: 'pending',
};

export const countryInitialState: CountryState = {
    countries: { languageNames: [], flags: [] },
    error: null,
    status: 'pending',
};

export const LanguageReducer = createReducer(
    // Supply the initial state
    languageInitialState,
    on(getLanguages, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getLanguageSuccess, (state, { languages }) => ({
        ...state,
        languages: languages,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getLanguageFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)

export const CountryListReducer = createReducer(
    // Supply the initial state
    countryInitialState,
    on(getCountryList, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getCountryListSuccess, (state, { countries }) => ({
        ...state,
        countries: countries,
        error: null,
        status: 'success',
    })),
    on(getCountryListFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))


)
export const defaultLanguageInitialState: DefaultLanguageState = {
    defaultLanguage: ''
};
export const DefaultLanguageReducer = createReducer(
    defaultLanguageInitialState,
    on(setDefaultLanguageForUI, (state, { name }) => ({
        ...state,
        defaultLanguage: name,
    })),
)
