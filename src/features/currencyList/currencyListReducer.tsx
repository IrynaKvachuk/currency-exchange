import { Reducer } from 'redux';
import { LoadingStatus, ErrorData } from '../_common/types';
import { errorData } from '../_common/initialValues';
import {
  CurrencyListTypes,
  CURRENCY_LIST_FAILED,
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS
} from './currencyListTypes';
import { Currency } from '../currency/currencyTypes';

export type CurrencyListState = {
  status: LoadingStatus;
  error: ErrorData;
  data: Array<Currency>;
};

const initialState: CurrencyListState = {
  status: 'idle',
  error: errorData,
  data: []
};

const currencyListReducer: Reducer<CurrencyListState, CurrencyListTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CURRENCY_LIST_REQUEST:
      return {
        ...state,
        status: 'loading'
      };
    case CURRENCY_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.currencyList,
        status: 'success'
      };
    case CURRENCY_LIST_FAILED:
      return {
        ...state,
        error: action.error,
        status: 'failed'
      };
    default:
      return state;
  }
};

export default currencyListReducer;
