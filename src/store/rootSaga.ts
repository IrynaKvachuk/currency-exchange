import { all, fork } from 'redux-saga/effects';
import currencyListSaga from '../features/currencyList/currencyListSaga';

export default function* rootSaga(): Generator {
  yield all([fork(currencyListSaga)]);
}
