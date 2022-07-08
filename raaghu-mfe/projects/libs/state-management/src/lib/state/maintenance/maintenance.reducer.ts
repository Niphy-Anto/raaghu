import { createReducer, on } from "@ngrx/store";
import { getmaintenances, getmaintenanceSuccess, getmaintenanceFailure, getWebsitelog,getWebsitelogSuccess,getWebsitelogFailure, deletecache, deletecacheSuccess } from "./maintenance.actions";
import { maintenance, WebLogLines } from "./maintenance.models";
export interface maintenanceState {
    maintenances: maintenance;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const maintenanceInitialState: maintenanceState = {
    maintenances: { items: [] },
    error: null,
    status: 'pending',
};
export const MaintenanceReducer = createReducer(
    // Supply the initial state
    maintenanceInitialState,
    on(getmaintenances, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getmaintenanceSuccess, (state, { maintenances }) => ({
        ...state,
        maintenances: maintenances,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getmaintenanceFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),


)

export interface Websitelogstate {
    Websitelogs: WebLogLines;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const WebsitelogInitialState: Websitelogstate = {
    Websitelogs: { latestWebLogLines: [] },
    error: null,
    status: 'pending',
};
export const WebsitelogReducer = createReducer(
    // Supply the initial state
    WebsitelogInitialState,
    on(getWebsitelog, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getWebsitelogSuccess, (state, { Websitelogs }) => ({
        ...state,
        Websitelogs: Websitelogs,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getWebsitelogFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)