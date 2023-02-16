import { combineReducers } from 'redux';
import currencyListReducer from '../features/currencyList/currencyListReducer';

export const rootReducer = combineReducers({
  currencyList: currencyListReducer
});

export type RootStateT = ReturnType<typeof rootReducer>;
