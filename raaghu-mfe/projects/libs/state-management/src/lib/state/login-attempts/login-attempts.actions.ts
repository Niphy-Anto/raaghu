import { createAction, props } from "@ngrx/store";
import { LoginAttempts } from "./login-attempts.models";

export const getLoginAttempts = createAction('[Login Page] Get LoginAttempts',
(loginAttempts: any) => ({ loginAttempts }));

export const getLoginAttemptsSuccess = createAction(
    '[LoginAttempts Page] Get LoginAttempts Success',
    props<{ loginAttempts: any }>()
);

export const getLoginAttemptsFailure = createAction(
    '[LoginAttempts Page] Get LoginAttempts Failure',
    props<{ error: string }>()
);