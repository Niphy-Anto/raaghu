

import { createReducer, on } from "@ngrx/store";
import { getProfile, getProfileFailure, getProfileSuccess } from "./mysettings.action";
import { Profile } from "./mysettings.models";


export interface profileState {
    profile: Profile;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const profileInitialState: profileState = {
    profile: { name: '', emailAddress: '', isGoogleAuthenticatorEnabled: false, isPhoneNumberConfirmed: false, qrCodeSetupImageUrl: '', phoneNumber: '', surname: '', userName: '', timezone: '' },
    error: null,
    status: 'pending',
};
export const ProfileReducer = createReducer(
    // Supply the initial state
    profileInitialState,
    on(getProfile, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getProfileSuccess, (state, { profile }) => ({
        ...state,
        profile: profile,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getProfileFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)