import { RootStateT } from '../../store/rootReducer';
import { CounterCurrency } from './currencyCounterTypes';

export const selectCurrencyToChangeValue = (state: RootStateT): number =>
  state.currencyCounter.currencyToChange.value;

export const selectCurrencyToGetValue = (state: RootStateT): number =>
  state.currencyCounter.currencyToGet.value;

export const selectCurrencyToChange = (state: RootStateT): CounterCurrency =>
  state.currencyCounter.currencyToChange;

export const selectCurrencyToGet = (state: RootStateT): CounterCurrency =>
  state.currencyCounter.currencyToGet;
