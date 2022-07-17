import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions';

export const countFeatureKey = 'count';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (_state) => 0)
);
