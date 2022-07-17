import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureKey, CounterState } from '../reducers';

export const selectCounterState =
  createFeatureSelector<CounterState>(counterFeatureKey);

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
)
