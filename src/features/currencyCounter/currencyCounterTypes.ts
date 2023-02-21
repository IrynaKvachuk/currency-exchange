export const SET_COUNTER_CURRENCY = 'SET_COUNTER_CURRENCY';
export const SET_CURRENCY_VALUE_TO_CHANGE = 'SET_CURRENCY_TO_VALUE_CHANGE';
export const SET_CURRENCY_VALUE_TO_GET = 'SET_CURRENCY_VALUE_TO_GET';

export type CounterInputType = 'currencyToChange' | 'currencyToGet';

export type CounterCurrency = {
  name: string;
  value: number;
  buy: string;
  sale: string;
};

export type CurrencyToChange = {
  counterInputType: CounterInputType;
  counterCurrency: CounterCurrency;
};

interface SetCounterCurrency {
  type: typeof SET_COUNTER_CURRENCY;
  payload: { currencyToChange: CurrencyToChange };
}

interface SetCurrencyValueToChange {
  type: typeof SET_CURRENCY_VALUE_TO_CHANGE;
  payload: { currencyValue: number };
}

interface SetCurrencyValueToGet {
  type: typeof SET_CURRENCY_VALUE_TO_GET;
  payload: { currencyValue: number };
}

export type CurrencyCounterTypes =
  | SetCounterCurrency
  | SetCurrencyValueToChange
  | SetCurrencyValueToGet;
