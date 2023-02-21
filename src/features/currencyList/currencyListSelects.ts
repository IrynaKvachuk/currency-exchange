import { RootStateT } from '../../store/rootReducer';
import { ErrorData, LoadingStatus } from '../_common/types';
import { Currency } from '../currency/currencyTypes';

export const selectCurrencyList = (state: RootStateT): Array<Currency> => state.currencyList.data;

export const selectCurrencyListCCY = (state: RootStateT): Array<string> =>
  state.currencyList.data.map((currency) => currency.ccy);

export const selectCurrencyListStatus = (state: RootStateT): LoadingStatus =>
  state.currencyList.status;

export const selectCurrencyListErrorStatus = (state: RootStateT): ErrorData =>
  state.currencyList.error;

export const selectCurrencyListFocusedCell = (state: RootStateT): string =>
  state.currencyList.focusedCell;

export const selectEditTypeError = (state: RootStateT): boolean => state.currencyList.editTypeError;

export const selectEditValueError = (state: RootStateT): boolean =>
  state.currencyList.editValueError;
