import {
  CurrencyCounterTypes,
  SET_COUNTER_CURRENCY,
  SET_COUNTER_CURRENCY_VALUE,
  CurrencyToChange,
  CurrencyValueToChange,
  SWAP_CURRENCIES
} from './currencyCounterTypes';

export const setCounterCurrency = (input: CurrencyToChange): CurrencyCounterTypes => ({
  type: SET_COUNTER_CURRENCY,
  payload: { currencyToChange: input }
});

export const setCounterCurrencyValue = (input: CurrencyValueToChange): CurrencyCounterTypes => ({
  type: SET_COUNTER_CURRENCY_VALUE,
  payload: { currencyValueToChange: input }
});

export const swapCurrencies = (): CurrencyCounterTypes => ({
  type: SWAP_CURRENCIES
});
