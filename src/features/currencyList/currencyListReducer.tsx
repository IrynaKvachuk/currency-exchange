import { Reducer } from 'redux';
import { LoadingStatus, ErrorData } from '../_common/types';
import { errorData } from '../_common/initialValues';
import {
  CurrencyListTypes,
  CURRENCY_LIST_FAILED,
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
  SET_FOCUSED_CELL,
  SET_NEW_CURRENCY_VALUE,
  GetChangedData
} from './currencyListTypes';
import { Currency } from '../currency/currencyTypes';

export type CurrencyListState = {
  status: LoadingStatus;
  error: ErrorData;
  data: Array<Currency>;
  focusedCell: string;
};

const initialState: CurrencyListState = {
  status: 'idle',
  error: errorData,
  data: [],
  focusedCell: ''
};

const getChangedData = (props: GetChangedData) => {
  const { prevData, changedCurrency } = props;

  const data = prevData.map((currency) => {
    if (changedCurrency.ccy === currency.ccy) return { ...currency, ...changedCurrency };
    return currency;
  });

  return data;
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
    case SET_FOCUSED_CELL:
      return {
        ...state,
        focusedCell: action.payload.focusedCell
      };
    case SET_NEW_CURRENCY_VALUE:
      return {
        ...state,
        data: getChangedData({
          prevData: state.data,
          changedCurrency: action.payload.changedCurrency
        })
      };
    default:
      return state;
  }
};

export default currencyListReducer;
