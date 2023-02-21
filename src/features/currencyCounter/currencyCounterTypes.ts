export const SET_COUNTER_CURRENCY = 'SET_COUNTER_CURRENCY';
export const SET_COUNTER_CURRENCY_VALUE = 'SET_COUNTER_CURRENCY_VALUE';

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

export type CurrencyValueToChange = {
  counterInputType: CounterInputType;
  value: number;
};

interface SetCounterCurrency {
  type: typeof SET_COUNTER_CURRENCY;
  payload: { currencyToChange: CurrencyToChange };
}

interface SetCounterCurrencyValue {
  type: typeof SET_COUNTER_CURRENCY_VALUE;
  payload: { currencyValueToChange: CurrencyValueToChange };
}

export type CurrencyCounterTypes = SetCounterCurrency | SetCounterCurrencyValue;
