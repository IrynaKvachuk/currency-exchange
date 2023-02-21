import { ErrorData } from '../_common/types';
import { ChangedCurrency, Currency } from '../currency/currencyTypes';

export const CURRENCY_LIST_REQUEST = 'CURRENCY_LIST/REQUEST';
export const CURRENCY_LIST_SUCCESS = 'CURRENCY_LIST/SUCCESS';
export const CURRENCY_LIST_FAILED = 'CURRENCY_LIST/FAILED';
export const SET_FOCUSED_CELL = 'CURRENCY_LIST/SET_FOCUSED_CELL';
export const SET_NEW_CURRENCY_VALUE = 'CURRENCY_LIST/SET_NEW_CURRENCY_VALUE';
export const SET_EDIT_ERROR = 'CURRENCY_LIST/SET_EDIT_ERROR';
export const CLEAR_EDIT_STATE = 'CURRENCY_LIST/CLEAR_EDIT_STATE';

export type GetChangedData = {
  prevData: Array<Currency>;
  changedCurrency: ChangedCurrency;
};

export type EditErrorType = 'editTypeError' | 'editValueError';

export type EditErrorData = {
  editErrorType: EditErrorType;
  value: boolean;
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

interface SetEditError {
  type: typeof SET_EDIT_ERROR;
  payload: { editErrorData: EditErrorData };
}

interface ClearEditState {
  type: typeof CLEAR_EDIT_STATE;
}

export type CurrencyListTypes =
  | GetCurrencyListRequest
  | GetCurrencyListSuccess
  | GetCurrencyListFailed
  | SetFocusedCell
  | SetNewCurrencyValue
  | SetEditError
  | ClearEditState;
