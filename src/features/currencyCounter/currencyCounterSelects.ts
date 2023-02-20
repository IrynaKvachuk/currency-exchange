import { RootStateT } from '../../store/rootReducer';
import { CurrencyToChange, CurrencyToGet } from './currencyCounterTypes';

export const selectCurrencyToChangeValue = (state: RootStateT): number =>
  state.currencyCounter.currencyToChange.value;

export const selectCurrencyToGetValue = (state: RootStateT): number =>
  state.currencyCounter.currencyToGet.value;

export const selectCurrencyToChange = (state: RootStateT): CurrencyToChange =>
  state.currencyCounter.currencyToChange;

export const selectCurrencyToGet = (state: RootStateT): CurrencyToGet =>
  state.currencyCounter.currencyToGet;
