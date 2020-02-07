import { createAction, props } from '@ngrx/store';
import { Entity } from './entity';

export enum EntityActionType {
    LoadEntities = "[Entity] Load Entities",
    LoadEntitiesSuccess = "[Entity] Load Entities Success",
    LoadEntitiesFail = "[Entity] Load Entities Fail"
}

export const loadEntities = createAction(EntityActionType.LoadEntities);

export const loadEntitiesSuccess = createAction(EntityActionType.LoadEntitiesSuccess,
    props<{ data: Entity[] }>());

export const loadEntitiesFail = createAction(EntityActionType.LoadEntitiesFail,
    props<{ error: Error | any }>());


export const fromEntityActions = {
    loadEntities,
    loadEntitiesSuccess,
    loadEntitiesFail
}