import { createAction, props } from "@ngrx/store";
import { ThemeSettingsDto } from "projects/libs/shared/src/lib/service-proxies";

export const getVisualsettings = createAction('[visualsettings Page] Get visualsettings');

export const getVisualsettingsSuccess = createAction(
    '[visualsettings Page] Get visualsettings Success',
    props<{ visualsettings: any }>()
);

export const getVisualsettingsFailure = createAction(
    '[visualsettings Page] Get visualsettings Failure',
    props<{ error: string }>()
);
export const UpdateDefaultUiManagementSettings = createAction(
    '[visualsettings Page] Update default ui managaement settings',
    (visualsettings: any) => ({ visualsettings })
)