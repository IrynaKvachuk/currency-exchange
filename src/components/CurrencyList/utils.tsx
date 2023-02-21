import {
  getCurrencyListFailed,
  getCurrencyListRequest
} from '../../features/currencyList/currencyListActions';
import store from '../../store';

export const getCurrencyData = async () => {
  const error429 = proceed429Error();

  if (!error429) store.dispatch(getCurrencyListRequest());

  return;
};

export const proceed429Error = () => {
  const errorVal = 'Error429';
  const error429Count = Number(localStorage.getItem(errorVal)) || 0;

  if (error429Count === 4) {
    const error = {
      data: 'Too many attempts to load data.',
      status: 429,
      statusText: 'Too many attempts'
    };
    store.dispatch(getCurrencyListFailed(error));
    localStorage.removeItem(errorVal);

    return true;
  }

  localStorage.setItem('Error429', JSON.stringify(error429Count + 1));

  return false;
};
