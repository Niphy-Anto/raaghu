import { createReducer, on } from "@ngrx/store";
import { PrepareCollectedData, PrepareCollectedDataSuccess } from "./download-data.action";




export interface downloadState {
    downloadData: any[]
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const downloadInitialState: downloadState = {
    downloadData: [],
    error: null,
    status: 'pending',
};
export const downloadReducer = createReducer(
    downloadInitialState,
    on(PrepareCollectedData, (state) => ({ ...state, status: 'loading' })),
    on(PrepareCollectedDataSuccess, (state, { downloadData }) => ({
        ...state,
        downloadData: downloadData.items,
        error: null,
        status: 'success',
    })),
)
