import { createAction, props } from "@ngrx/store";
import { AnyFn } from "@ngrx/store/src/selector";
//import { CreateEditionDto, MoveTenantsToAnotherEditionDto, UpdateEditionDto } from "projects/libs/shared/src/lib/service-proxies";
import { Edition } from "./edition.model";

export const getEditions = createAction('[Edition Page] Get Edition');

export const getEditionSuccess = createAction(
    '[Edition Page] Get Edition Success',
    props<{ editions: Edition }>()
);

export const getEditionFailure = createAction(
    '[Edition Page] Get Edition Failure',
    props<{ error: string }>()
);

export const getEditionInfo = createAction('[Edition Page] Get Edition Info', (id: any | undefined) => ({ id }));

export const getEditionInfoSuccess = createAction(
    '[Edition Page] Get Edition Info Success',
    props<{ editionInfo: any }>()
);

export const getEditionInfoFailure = createAction(
    '[Edition Page] Get Edition Info Failure',
    props<{ error: string }>()
);


export const deleteEdition = createAction(
    '[Edition Page] Delete Edition',
    (id: any) => ({ id })
);

export const saveEdition = createAction(
    '[Edition Page] Save Edition',
    (edition: AnyFn) => ({ edition })
);

export const updateEdition = createAction(
    '[Edition Page] Update Edition',
    (edition: any) => ({ edition })
);

export const getEditionUpdateSuccess = createAction(
    '[Edition Page] Get Edition Update Success',
    props<{ edition: any }>()
);

export const deleteEditionSuccess = createAction(
    '[Edition Page] Delete Edition Success',
    (id: number) => ({ id })
);

export const deleteEditionFailure = createAction(
    '[Edition Page] Delete Edition Failure',
    props<{ error: string }>()
);

export const getEditionPageComboboxItems = createAction('[Edition Page] Get Edition Combobox Items');

export const getEditionPageComboboxItemsSuccess = createAction(
  '[Edition Page] Get Edition Combobox Items Success',
  props<{ editionComboboxItem: any }>()
);

export const getEditionPageComboboxItemsFailure = createAction(
  '[Edition Page] Get Edition Combobox Items Failure',
  props<{ error: string }>()
);



export const getTenantCount = createAction('[Edition Page] Get Tenant Count', (editionId: number|undefined) => ({ editionId }));

export const getTenantCountSuccess = createAction(
  '[Edition Page] Get Tenant Count Success',
  props<{ tenantCount: any }>()
);

export const getTenantCountFailure = createAction(
  '[Edition Page] Get Tenant Count Failure',
  props<{ error: string }>()
);

export const moveTenant = createAction(
  '[Edition Page] Move Tenant',
  (data: any) => ({ data })
);


