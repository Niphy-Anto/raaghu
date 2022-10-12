 import { createAction, props } from "@ngrx/store";

export const getAllIdentityResources = createAction('[Identity-Resources] Get All Identity-Resources');

export const getAllIdentityResourcesSuccess = createAction(
    '[Identity-Resources Page] Get All Identity-Resources Success',
    props<{ allClients: any }>()
);

export const getAllIdentityResourcesFailure = createAction(
    'Identity-Resources Page] Get All Identity-Resources Failure',
    props<{ error: string }>()
);

export const getIdentityResources = createAction('[Identity-Resources Page] Get Identity-Resource',
(id:any) => ( id ));

export const getIdentityResourcesSuccess = createAction(
    '[Identity-Resources Page] Get Identity-Resource Success',
    props<{ client: any }>()
);

export const getIdentityResourcesFailure = createAction(
    '[Identity-Resources Page] Get Identity-Resource Failure',
    props<{ error: string }>()
);

export const updateIdentityResources = createAction('[Identity-Resources Page] Update Identity-Resource',
(data:any) => (data));

export const updateIdentityResourcesSuccess = createAction(
    '[Identity-Resources Page] Update Identity-Resource Success',
);

export const updateIdentityResourcesFailure = createAction(
    '[Identity-Resources Page] Update Identity-Resource Failure',
    props<{ error: string }>()
);

export const saveIdentityResources = createAction(
    '[Identity-Resources Page] Save Identity-Resource Types',
    (data) => ( data )
    );

export const saveIdentityResourcesSuccess = createAction(
    '[Identity-Resources Page] Save Identity-Resource Success',
);

export const saveIdentityResourcesFailure = createAction(
    '[Identity-Resources Page] Save Identity-Resource Failure',
    props<{ error: string }>()
);

export const deleteIdentityResources = createAction(
    '[Identity-Resources Page] Delete Identity-Resource',
    (data) => (data)
);
export const deleteIdentityResourcesSucess = createAction(
    '[Identity-Resources Page] Delete Identity-Resource Success',
);

