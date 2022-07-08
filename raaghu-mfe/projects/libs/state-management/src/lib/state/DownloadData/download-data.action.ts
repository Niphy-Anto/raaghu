import { createAction, props } from "@ngrx/store";



export const PrepareCollectedData = createAction('[download Link Page] Get Prepare Collected Data');
export const PrepareCollectedDataSuccess = createAction(
    '[download Link Page] Get Prepare Collected Data Success',
    props<{ downloadData: any }>()
);
