import { combineReducers } from 'redux';
import currencyCounterReducer from '../features/currencyCounter/currencyCounterReducer';
import currencyListReducer from '../features/currencyList/currencyListReducer';

export const rootReducer = combineReducers({
  currencyList: currencyListReducer,
  currencyCounter: currencyCounterReducer
});

export type RootStateT = ReturnType<typeof rootReducer>;
