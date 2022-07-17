import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';


export interface AppState {
  router: fromRouter.RouterReducerState<any>
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
