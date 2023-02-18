import { RootStateT } from '../../store/rootReducer';
import { LoadingStatus } from '../_common/types';
import { Currency } from '../currency/currencyTypes';

export const selectCurrencyList = (state: RootStateT): Array<Currency> => state.currencyList.data;

export const selectCurrencyListCCY = (state: RootStateT): Array<string> =>
  state.currencyList.data.map((currency) => currency.ccy);

export const selectCurrencyListStatus = (state: RootStateT): LoadingStatus =>
  state.currencyList.status;

export const selectCurrencyListErrorStatus = (state: RootStateT): number | null =>
  state.currencyList.error.status;
