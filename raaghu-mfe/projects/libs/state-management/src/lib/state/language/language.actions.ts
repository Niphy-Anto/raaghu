import { createAction, props } from "@ngrx/store";
//import { CreateOrUpdateLanguageInput } from "projects/libs/shared/src/lib/service-proxies";
import { Countries, Language, PostLanguage } from "./language.models";

export const getLanguages = createAction('[Language Page] Get Languages');


export const getLanguageSuccess = createAction(
    '[Language Page] Get Languages Success',
    props<{ languages: any }>()
);

export const getLanguageFailure = createAction(
    '[Language Page] Get Languages Failure',
    props<{ error: string }>()
);

export const getCultureList = createAction('[Language Page] Get Country List');

export const getCultureListSuccess = createAction(
    '[Language Page] Get culture List Success',
    props<{ cultureList: any }>()
);

export const getCultureListFailure = createAction(
    '[Language Page] Get Country List Failure',
    props<{ error: string }>()
);

export const saveLanguage = createAction(
    '[Language Page] Save Language',
    (data: any) => (data)
);

export const deleteLanguage = createAction(
    '[Language Page] Delete Language',
    (id: any) => ({ id })
);

export const saveLanguageSuccess = createAction(
    '[Language Page] Save Language Success', props<{ language: PostLanguage }>()
);

export const setDefaultLanguage = createAction(
    '[Language Page] Set Default Language',
    (name: any) => ({ name })
);

export const setDefaultLanguageForUI = createAction(
    '[Language Page] Set Default Language For UI',
    (name: string) => ({ name })
);

export const getLanguageForEdit = createAction(
    '[Language Page] Get Language For Edit',
    (data: any) => (data)
);

export const getLanguageForEditSuccess = createAction(
    '[Language Page] Get Language For Edit Success',
    props<{ languageInfo : any }>()
);

export const getLanguageForEditFailure = createAction(
    '[Language Page] Get Language For Edit Success',
    props<{ error : string }>()
);
