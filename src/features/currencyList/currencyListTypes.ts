import { ErrorData } from '../_common/types';
import { ChangedCurrency, Currency } from '../currency/currencyTypes';

export const CURRENCY_LIST_REQUEST = 'CURRENCY_LIST/REQUEST';
export const CURRENCY_LIST_SUCCESS = 'CURRENCY_LIST/SUCCESS';
export const CURRENCY_LIST_FAILED = 'CURRENCY_LIST/FAILED';
export const SET_FOCUSED_CELL = 'CURRENCY_LIST/SET_FOCUSED_CELL';
export const SET_NEW_CURRENCY_VALUE = 'CURRENCY_LIST/SET_NEW_CURRENCY_VALUE';

export type GetChangedData = {
  prevData: Array<Currency>;
  changedCurrency: ChangedCurrency;
};

interface GetCurrencyListRequest {
  type: typeof CURRENCY_LIST_REQUEST;
}

interface GetCurrencyListSuccess {
  type: typeof CURRENCY_LIST_SUCCESS;
  payload: { currencyList: Array<Currency> };
}

interface GetCurrencyListFailed {
  type: typeof CURRENCY_LIST_FAILED;
  error: ErrorData;
}

interface SetFocusedCell {
  type: typeof SET_FOCUSED_CELL;
  payload: { focusedCell: string };
}

interface SetNewCurrencyValue {
  type: typeof SET_NEW_CURRENCY_VALUE;
  payload: { changedCurrency: ChangedCurrency };
}

export type CurrencyListTypes =
  | GetCurrencyListRequest
  | GetCurrencyListSuccess
  | GetCurrencyListFailed
  | SetFocusedCell
  | SetNewCurrencyValue;
