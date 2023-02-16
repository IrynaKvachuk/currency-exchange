import { takeLatest, call, put } from 'redux-saga/effects';
import { CURRENCY_LIST_REQUEST } from './currencyListTypes';
import { getCurrencyListSuccess, getCurrencyListFailed } from './currencyListActions';
import { currencyListAPI } from '../../api/currencyList';

function* getAllMentors(): any {
  try {
    const response = yield call(currencyListAPI.getCurrencyList);
    yield put(getCurrencyListSuccess(response));
  } catch (error: any) {
    yield put(getCurrencyListFailed(error));
  }
}

function* mentorsSaga(): Generator {
  yield takeLatest(CURRENCY_LIST_REQUEST, getAllMentors);
}

export default mentorsSaga;
