import { Reducer } from 'redux';
import {
  CurrencyCounterTypes,
  CurrencyToChange,
  CurrencyToGet,
  SET_CURRENCY_TO_CHANGE,
  SET_CURRENCY_TO_GET
} from './currencyCounterTypes';

export type CurrencyCounterState = {
  currencyToChange: CurrencyToChange;
  currencyToGet: CurrencyToGet;
};

const initialState: CurrencyCounterState = {
  currencyToChange: { name: '', value: 0, buy: '', sale: '' },
  currencyToGet: { name: '', value: 0, buy: '', sale: '' }
};

const currencyCounterReducer: Reducer<CurrencyCounterState, CurrencyCounterTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_CURRENCY_TO_CHANGE:
      return {
        ...state,
        currencyToChange: { ...state.currencyToChange, ...action.payload.currencyToChange }
      };
    case SET_CURRENCY_TO_GET:
      return {
        ...state,
        currencyToGet: { ...state.currencyToGet, ...action.payload.currencyToGet }
      };
    default:
      return state;
  }
};

export default currencyCounterReducer;
