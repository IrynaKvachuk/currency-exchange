export const SET_COUNTER_CURRENCY = 'COUNTER/SET_COUNTER_CURRENCY';
export const SET_COUNTER_CURRENCY_VALUE = 'COUNTER/SET_COUNTER_CURRENCY_VALUE';
export const SWAP_CURRENCIES = 'COUNTER/SWAP_CURRENCIES';

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
interface SwapCurrencies {
  type: typeof SWAP_CURRENCIES;
}

export type CurrencyCounterTypes = SetCounterCurrency | SetCounterCurrencyValue | SwapCurrencies;
