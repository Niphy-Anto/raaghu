// import { Action, createReducer, on } from '@ngrx/store';
// export function laanguageListReducer(state, action:Action)
// {
//     switch (action.type) {

//         case 'ADD_LANGUAGE':

//           return { ...state, languageList: [...state.items, action] };

//       }
// }

import { createReducer, on } from "@ngrx/store";

import { getVisualsettings, getVisualsettingsFailure, getVisualsettingsSuccess } from "./visual-settings.actions";


export interface VisualsettingsState {
    visualsettings: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const  VisualsettingsState: VisualsettingsState = {
    visualsettings: [],
    error: null,
    status: 'pending',
};
export const VisualsettingsReducer = createReducer(
    // Supply the initial state
    VisualsettingsState,
    on(getVisualsettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getVisualsettingsSuccess, (state, { visualsettings }) => ({
        ...state,
        visualsettings: visualsettings,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getVisualsettingsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)