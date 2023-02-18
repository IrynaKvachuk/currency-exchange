import { takeLatest, call, put } from 'redux-saga/effects';
import { CURRENCY_LIST_REQUEST } from './currencyListTypes';
import { getCurrencyListSuccess, getCurrencyListFailed } from './currencyListActions';
import { currencyListAPI } from '../../api/currencyList';

function* getCurrencyList(): any {
  try {
    const response = yield call(currencyListAPI.getCurrencyList);
    yield put(getCurrencyListSuccess(response));
  } catch (error: any) {
    yield put(getCurrencyListFailed(error));
  }
}

function* currencyListSaga(): Generator {
  yield takeLatest(CURRENCY_LIST_REQUEST, getCurrencyList);
}

export default currencyListSaga;
