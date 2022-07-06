// import { Action, createReducer, on } from '@ngrx/store';
// export function laanguageListReducer(state, action:Action)
// {
//     switch (action.type) {

//         case 'ADD_LANGUAGE':

//           return { ...state, languageList: [...state.items, action] };

//       }
// }

import { createReducer, on } from "@ngrx/store";
import { getLoginAttemptsFailure, getLoginAttempts, getLoginAttemptsSuccess } from "./login-attempts.actions";
import { LoginAttempts } from "./login-attempts.models";


export interface LoginAttemptsState {
    loginAttempts: LoginAttempts;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const loginAttemptsInitialState: LoginAttemptsState = {
    loginAttempts: {totalCount:0, items: [] },
    error: null,
    status: 'pending',
};
export const LoginAttemptsReducer = createReducer(
    // Supply the initial state
    loginAttemptsInitialState,
    on(getLoginAttempts, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getLoginAttemptsSuccess, (state, { loginAttempts }) => ({
        ...state,
        loginAttempts: loginAttempts,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getLoginAttemptsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)