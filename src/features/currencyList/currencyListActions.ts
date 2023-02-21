import { ErrorData } from '../_common/types';
import { ChangedCurrency, Currency } from '../currency/currencyTypes';
import {
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
  CURRENCY_LIST_FAILED,
  SET_FOCUSED_CELL,
  SET_NEW_CURRENCY_VALUE,
  CurrencyListTypes,
  EditErrorData,
  SET_EDIT_ERROR,
  CLEAR_EDIT_STATE
} from './currencyListTypes';

export const getCurrencyListRequest = (): CurrencyListTypes => ({
  type: CURRENCY_LIST_REQUEST
});

export const getCurrencyListSuccess = (input: Array<Currency>): CurrencyListTypes => ({
  type: CURRENCY_LIST_SUCCESS,
  payload: { currencyList: input }
});

export const getCurrencyListFailed = (input: ErrorData): CurrencyListTypes => ({
  type: CURRENCY_LIST_FAILED,
  error: input
});

export const setFocusedCell = (input: string): CurrencyListTypes => ({
  type: SET_FOCUSED_CELL,
  payload: { focusedCell: input }
});

export const setNewCurrencyValue = (input: ChangedCurrency): CurrencyListTypes => ({
  type: SET_NEW_CURRENCY_VALUE,
  payload: { changedCurrency: input }
});

export const setEditError = (input: EditErrorData): CurrencyListTypes => ({
  type: SET_EDIT_ERROR,
  payload: { editErrorData: input }
});

export const clearEditState = (): CurrencyListTypes => ({
  type: CLEAR_EDIT_STATE
});
