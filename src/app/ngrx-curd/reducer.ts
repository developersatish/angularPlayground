import { Entity } from './entity';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on , Action } from '@ngrx/store';
import { fromEntityActions } from './action';


export const ENTITY_FEATURE_KEY = "entity";
export interface State extends EntityState<Entity> {
    loaded: boolean;
    error: Error | any;
}

export interface EntityPartialState {
    readonly [ENTITY_FEATURE_KEY]: State;
}

export const adapter: EntityAdapter<Entity> = createEntityAdapter<Entity>({
    selectId: item => item.id
});

export const initialState: State = adapter.getInitialState({
    loaded: false,
    error: null
});


const _reducer = createReducer(
    initialState,
    on(fromEntityActions.loadEntitiesSuccess, (state, { data }) => {
        return adapter.addAll(data, {
            ...state,
            loaded: true
        });
    }),
    on(fromEntityActions.loadEntitiesFail, (state, { error }) => {
        return {
            ...state,
            error
        };
    })
);


export function reducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}