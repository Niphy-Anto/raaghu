// import { Action, createReducer, on } from '@ngrx/store';
// export function laanguageListReducer(state, action:Action)
// {
//     switch (action.type) {

//         case 'ADD_LANGUAGE':

//           return { ...state, languageList: [...state.items, action] };

//       }
// }

import { createReducer, on } from "@ngrx/store";
import { getManageLinkedAccountsFailure, getManageLinkedAccounts, getManageLinkedAccountsSuccess } from "./manage-linked-accounts.actions";
import { ManageLinkedAccounts } from "./manage-linked-accounts.models";


export interface ManageLinkedAccountsState {
    ManageLinkedAccounts: ManageLinkedAccounts;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const ManageLinkedAccountsInitialState: ManageLinkedAccountsState = {
    ManageLinkedAccounts: { items: [] },
    error: null,
    status: 'pending',
};
export const ManageLinkedAccountsReducer = createReducer(
    // Supply the initial state
    ManageLinkedAccountsInitialState,
    on(getManageLinkedAccounts, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getManageLinkedAccountsSuccess, (state, { ManageLinkedAccounts }) => ({
        ...state,
        ManageLinkedAccounts: ManageLinkedAccounts,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getManageLinkedAccountsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)