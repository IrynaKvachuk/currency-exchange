import { Reducer } from 'redux';
import {
  CurrencyCounterTypes,
  CounterCurrency,
  SET_COUNTER_CURRENCY,
  SET_CURRENCY_VALUE_TO_CHANGE,
  SET_CURRENCY_VALUE_TO_GET
} from './currencyCounterTypes';

export type CurrencyCounterState = {
  currencyToChange: CounterCurrency;
  currencyToGet: CounterCurrency;
};

const initialState: CurrencyCounterState = {
  currencyToChange: { name: 'UAH', value: 1, buy: '1', sale: '1' },
  currencyToGet: { name: '', value: 0, buy: '', sale: '' }
};

const currencyCounterReducer: Reducer<CurrencyCounterState, CurrencyCounterTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_COUNTER_CURRENCY: {
      const curInputType = action.payload.currencyToChange.counterInputType;
      const newCurrency = action.payload.currencyToChange.counterCurrency;

      return {
        ...state,
        [curInputType]: {
          ...newCurrency,
          value: state[curInputType].value
        }
      };
    }
    case SET_CURRENCY_VALUE_TO_CHANGE:
      return {
        ...state,
        currencyToChange: { ...state.currencyToChange, value: action.payload.currencyValue }
      };
    case SET_CURRENCY_VALUE_TO_GET:
      return {
        ...state,
        currencyToGet: { ...state.currencyToGet, value: action.payload.currencyValue }
      };
    default:
      return state;
  }
};

export default currencyCounterReducer;
