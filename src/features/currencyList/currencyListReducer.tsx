import { Reducer } from 'redux';
// import { MENTORS_REQUEST, MENTORS_SUCCESS, MENTORS_FAILED, MentorsTypes } from './mentorsTypes';
import { LoadingStatus, ErrorData } from '../_common/types';
import { errorData } from '../_common/initialValues';
import { CurrencyListTypes } from './currencyListTypes';
import { Currency } from '../ currency/currencyTypes';

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
    // case MENTORS_REQUEST:
    //   return {
    //     ...state,
    //     status: 'loading'
    //   };
    // case MENTORS_SUCCESS:
    //   return {
    //     ...state,
    //     data: action.payload.mentors,
    //     status: 'success',
    //   };
    // case MENTORS_FAILED:
    //   return {
    //     ...state,
    //     error: action.error,
    //     status: 'failed',
    //   };
    default:
      return state;
  }
};

export default currencyListReducer;
