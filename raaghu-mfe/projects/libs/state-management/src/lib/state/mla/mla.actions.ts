import { LinkToUserInput, ListResultDtoOfLinkedUserDto, ListResultDtoOfOrganizationUnitDto, PagedResultDtoOfOrganizationUnitRoleListDto, PagedResultDtoOfOrganizationUnitUserListDto, UnlinkUserInput } from "@libs/shared";
import { createAction, props } from "@ngrx/store";
import { GetNotificationsOutput } from "projects/libs/shared/src/lib/service-proxies";

export const getMLATenancyData = createAction('[MLA Page] Get MLA Tenancy data');

export const getMLATenancyDataSuccess = createAction(
    '[MLA Page] Get MLA Tenancy data Success',
    props<{ tenancyData: any  }>()
);

export const getMLATenancyDataFailure = createAction(
    '[MLA Page] Get MLA Tenancy data Failure',
    props<{ error: string }>()
);

export const deleteAccount = createAction(
    '[MLA Page] Delete Account',
    (user: UnlinkUserInput) => ({ user })
);

export const linkToUser = createAction(
    '[MLA Page] Link to User',
    (user: LinkToUserInput) => ({ user })
);

export const getUserNotification = createAction('[MLA Page Page] Get Notification');

export const getUserNotificationSuccess = createAction(
    '[MLA Page] Get Notification Success',
    props<{ getNotificaitonsOutput }>()
);

export const getUserNotificationFailure = createAction(
    '[MLA Page] Get Notifications Failure',
    props<{ error: string }>()
);

export const SetAllNotificationsAsRead = createAction('[MLA Page] Set All Notification Read');


export const SetNotificationRead = createAction('[MLA Page] Set Notification Read',
    (user) => (user)
);

