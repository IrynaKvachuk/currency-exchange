import { ErrorData } from '../_common/types';
import { Currency } from '../ currency/currencyTypes';
import {
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
  CURRENCY_LIST_FAILED,
  CurrencyListTypes
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
