import {
  CurrencyToChange,
  CurrencyCounterTypes,
  CurrencyToGet,
  SET_CURRENCY_TO_CHANGE,
  SET_CURRENCY_TO_GET
} from './currencyCounterTypes';

export const setCurrencyToChange = (input: CurrencyToChange): CurrencyCounterTypes => ({
  type: SET_CURRENCY_TO_CHANGE,
  payload: { currencyToChange: input }
});

export const setCurrencyToGet = (input: CurrencyToGet): CurrencyCounterTypes => ({
  type: SET_CURRENCY_TO_GET,
  payload: { currencyToGet: input }
});
