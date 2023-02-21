import {
  CounterCurrency,
  CounterInputType
} from '../../features/currencyCounter/currencyCounterTypes';

// EVENTS
export type CurrencySelectChange = {
  event: React.ChangeEvent;
  counterInput: CounterInputType;
};

export type CurrencyValueInputChange = {
  event: React.ChangeEvent;
  counterInput: CounterInputType;
};

// METHODS
export type ChangeCurrencyValue = {
  inputEl: HTMLInputElement;
  counterInput: CounterInputType;
};

export type CalculateCurrencyValue = {
  counterInput: CounterInputType;
  amount: number;
  stateToChange: CounterCurrency;
  stateToGet: CounterCurrency;
};

export type GetOppositeValue = {
  counterInput: CounterInputType;
  amount: number;
};
