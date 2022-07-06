
import { createAction, props } from "@ngrx/store";
import { Setting } from "./settings.models";

export const getSettings = createAction('[Setting Page] Get Setting');

export const getSettingSuccess = createAction(
    '[Setting Page] Get Settings Success',
    props<{ settings : any }>()
);

export const getSettingFailure = createAction(
    '[Settings Page] Get Settings Failure',
    props<{ error: string }>()
);

export const getSettingsTenantPageComboboxItems = createAction('[Setting Page] Get Settings Tenant Combobox Items');

export const getSettingsTenantPageComboboxItemsSuccess = createAction(
  '[Edition Page] Get Edition Combobox Items Success',
  props<{ settingsComboboxItem: any }>()
);

export const getSettingsTenantPageComboboxItemsFailure = createAction(
  '[Setting Page] Get Settings Tenant Combobox Items Failure',
  props<{ error: string }>()
);

export const updateSettings = createAction(
  '[Setting Page] Update Setting',
  (setting: any) => ({ setting })
);
export const sendTestmail = createAction(
  '[Setting Page] send Test Mail',
  (MailId: any) => ({ MailId })
);
