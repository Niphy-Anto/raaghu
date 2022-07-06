// import { Action, createReducer, on } from '@ngrx/store';
// export function laanguageListReducer(state, action:Action)
// {
//     switch (action.type) {

//         case 'ADD_LANGUAGE':

//           return { ...state, languageList: [...state.items, action] };

//       }
// }

import { createReducer, on } from "@ngrx/store";
import { getsubscriptionFailure, getsubscription, getsubscriptionSuccess, getsubscriptioninformation, getsubscriptioninformationSuccess, getsubscriptioninformationFailure } from "./subscription.actions";
import { Subscription,SubscriptionInformation } from "./subscription.models";


export interface SubscriptionState {
    subscriptions: Subscription;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
export const SubscriptionInitialState: SubscriptionState = {
    subscriptions: { items: [] },
    error: null,
    status: 'pending',
};
export interface SubscriptionInformationState {
    Subscriptioninformation:{};
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
export const SubscriptionInformationInitialState: SubscriptionInformationState = {
    Subscriptioninformation:{},
    error: null,
    status: 'pending',
};

export const SubscriptionReducer = createReducer(
    // Supply the initial state
    SubscriptionInitialState,
    on(getsubscription, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getsubscriptionSuccess, (state, { Subscription }) => ({
        ...state,
        subscriptions: Subscription,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getsubscriptionFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)
export const SubscriptionInformationReducer = createReducer(
    // Supply the initial state
    SubscriptionInformationInitialState,
    on(getsubscriptioninformation, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getsubscriptioninformationSuccess, (state, { SubscriptionInformation }) => ({
        ...state,
        SubscriptionInformation: SubscriptionInformation,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getsubscriptioninformationFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)