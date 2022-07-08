import { createAction, props } from "@ngrx/store";
import { UnlinkUserInput } from "projects/libs/shared/src/lib/service-proxies";
import { ManageLinkedAccounts ,ManageLinkedAccountsItem} from "./manage-linked-accounts.models";

export const getManageLinkedAccounts = createAction('[ManageLinkedAccounts Page] Get ManageLinkedAccounts');

export const getManageLinkedAccountsSuccess = createAction(
    '[ManageLinkedAccounts Page] Get ManageLinkedAccounts Success',
    props<{ ManageLinkedAccounts: ManageLinkedAccounts }>()
);

export const getManageLinkedAccountsFailure = createAction(
    '[ManageLinkedAccounts Page] Get ManageLinkedAccounts Failure',
    props<{ error: string }>()
);


export const deleteLinkaccount = createAction('[ManageLinkedAccounts Page] Delete Link Account',
(user: UnlinkUserInput) => ({ user }));

// export const deleteLinkaccounSuccess = createAction(
//     '[ManageLinkedAccounts Page] Delete Cache Success',
//     props<{ cache:any }>()
// );

// export const deleteLinkaccounFailure = createAction(
//     '[ManageLinkedAccounts Page] Delete Cache Failure',
//     props<{ error: string }>()
// );