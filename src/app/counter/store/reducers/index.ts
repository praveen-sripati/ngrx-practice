import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  combineReducers
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromCounter from './counter.reducer';
import * as fromRoot from 'src/app/store';

export const counterFeatureKey = 'counter';

export interface CounterState {
  [fromCounter.countFeatureKey]: number
}

export interface AppState extends fromRoot.AppState {
  [counterFeatureKey]: CounterState;
}

export function reducers(state: CounterState | undefined, action: Action) {
  return combineReducers({
    [fromCounter.countFeatureKey]: fromCounter.counterReducer,
  })(state, action);
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
