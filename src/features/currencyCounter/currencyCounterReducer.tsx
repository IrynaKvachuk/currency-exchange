import { Reducer } from 'redux';
import {
  CurrencyCounterTypes,
  CounterCurrency,
  SET_COUNTER_CURRENCY,
  SET_COUNTER_CURRENCY_VALUE,
  SWAP_CURRENCIES
} from './currencyCounterTypes';

export type CurrencyCounterState = {
  currencyToChange: CounterCurrency;
  currencyToGet: CounterCurrency;
};

const initialState: CurrencyCounterState = {
  currencyToChange: { name: 'UAH', value: '1.0000', buy: '1', sale: '1' },
  currencyToGet: { name: '', value: '0', buy: '', sale: '' }
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
          value: newCurrency.value ?? state[curInputType].value
        }
      };
    }
    case SET_COUNTER_CURRENCY_VALUE: {
      const curInputType = action.payload.currencyValueToChange.counterInputType;
      const newValue = action.payload.currencyValueToChange.value;

      return {
        ...state,
        [curInputType]: {
          ...state[curInputType],
          value: newValue
        }
      };
    }
    case SWAP_CURRENCIES: {
      const currencyToChange = state.currencyToChange;
      return {
        ...state,
        currencyToChange: { ...state.currencyToGet, value: currencyToChange.value },
        currencyToGet: currencyToChange
      };
    }
    default:
      return state;
  }
};

export default currencyCounterReducer;
