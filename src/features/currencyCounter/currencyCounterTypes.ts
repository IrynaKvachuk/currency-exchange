export const SET_CURRENCY_TO_GET = 'SET_CURRENCY_TO_GET';
export const SET_CURRENCY_TO_CHANGE = 'SET_CURRENCY_TO_CHANGE';

export type CounterInputType = 'CurrencyToChange' | 'CurrencyToGet';

export type CurrencyToChange = {
  name: string;
  value: number;
  buy: string;
  sale: string;
};
export type CurrencyToGet = {
  name: string;
  value: number;
  buy: string;
  sale: string;
};

interface SetCurrencyToChange {
  type: typeof SET_CURRENCY_TO_CHANGE;
  payload: { currencyToChange: CurrencyToChange };
}

interface SetCurrencyToGet {
  type: typeof SET_CURRENCY_TO_GET;
  payload: { currencyToGet: CurrencyToGet };
}

export type CurrencyCounterTypes = SetCurrencyToChange | SetCurrencyToGet;
