import { GetNotificationsOutput, ListResultDtoOfLinkedUserDto, ListResultDtoOfOrganizationUnitDto, PagedResultDtoOfOrganizationUnitRoleListDto, PagedResultDtoOfOrganizationUnitUserListDto } from "@libs/shared";
import { createReducer, on } from "@ngrx/store";
import { getMLATenancyData, getMLATenancyDataSuccess, getUserNotification, getUserNotificationFailure, getUserNotificationSuccess, SetAllNotificationsAsRead, } from "./mla.actions";


export interface MLAState {
    tenancyData: any,
    notification: any,
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const MLAInitialState: MLAState = {
    tenancyData: null,
    notification:null,
    error: "",
    status: 'pending',
};

export const MLAReducer = createReducer(
    // Supply the initial state
    MLAInitialState,
    on(getMLATenancyData, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getMLATenancyDataSuccess, (state, { tenancyData }) => ({
        ...state,
        tenancyData: tenancyData,
        error: null,
        status: 'success',
    })),
    
    on(getUserNotification, (state) => ({ ...state, status: 'loading' })),
    on(getUserNotificationSuccess, (state, { getNotificaitonsOutput }) => ({
        ...state,
        notification: getNotificaitonsOutput,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getUserNotificationFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
)
