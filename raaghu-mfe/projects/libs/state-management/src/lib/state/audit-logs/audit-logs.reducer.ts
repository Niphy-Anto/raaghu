// import { Action, createReducer, on } from '@ngrx/store';
// export function laanguageListReducer(state, action:Action)
// {
//     switch (action.type) {

//         case 'ADD_LANGUAGE':

//           return { ...state, languageList: [...state.items, action] };

//       }
// }

import { createReducer, on } from "@ngrx/store";
import { getAuditLogsSuccess, getAuditLogs, getAuditLogsFailure } from "./audit-logs.actions";
import { AuditLogs } from "./audit-logs.models";


export interface AuditLogsState {
  auditLogs: AuditLogs;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const auditLogsInitialState: AuditLogsState = {
  auditLogs: { items: [] },
  error: null,
  status: 'pending',
};

export interface ChangeLogsState {
  changeLogs: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const ChangeLogInitialState: ChangeLogsState = {
  changeLogs: { items: [] },
  error: null,
  status: 'pending',
};
export const AuditLogsReducer = createReducer(
  // Supply the initial state
  auditLogsInitialState,
  on(getAuditLogs, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded todos
  on(getAuditLogsSuccess, (state, { auditLogs }) => ({
    ...state,
    auditLogs: auditLogs,
    error: null,
    status: 'success',
  })),
  // Handle todos load failure
  on(getAuditLogsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
)
