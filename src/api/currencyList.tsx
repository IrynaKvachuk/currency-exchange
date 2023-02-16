import instance from './api.instance';
import { ENDPOINTS } from './api.config';
import { Currency } from '../features/ currency/currencyTypes';

export const currencyListAPI = {
  getCurrencyList(): Promise<Array<Currency>> {
    return instance.get(ENDPOINTS.currencyList).then((resp) => resp.data);
  }
};
