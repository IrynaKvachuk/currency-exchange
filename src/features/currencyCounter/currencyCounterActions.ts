import {
  CurrencyCounterTypes,
  SET_COUNTER_CURRENCY,
  SET_CURRENCY_VALUE_TO_CHANGE,
  SET_CURRENCY_VALUE_TO_GET,
  CurrencyToChange
} from './currencyCounterTypes';

export const setCounterCurrency = (input: CurrencyToChange): CurrencyCounterTypes => ({
  type: SET_COUNTER_CURRENCY,
  payload: { currencyToChange: input }
});

export const setCurrencyValueToChange = (input: number): CurrencyCounterTypes => ({
  type: SET_CURRENCY_VALUE_TO_CHANGE,
  payload: { currencyValue: input }
});

export const setCurrencyValueToGet = (input: number): CurrencyCounterTypes => ({
  type: SET_CURRENCY_VALUE_TO_GET,
  payload: { currencyValue: input }
});
