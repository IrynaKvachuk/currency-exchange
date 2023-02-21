import { Currency } from '../../features/currency/currencyTypes';
import { setCounterCurrency } from '../../features/currencyCounter/currencyCounterActions';
import store from '../../store';
import { CurrencySelectChange, CurrencyValueInputChange } from './types';
import { changeCurrencyValue } from './utils';

export const currencyValueInputChange = (props: CurrencyValueInputChange) => {
  const { event, counterInput } = props;
  const inputEl = event.target as HTMLInputElement;
  changeCurrencyValue({ inputEl, counterInput });
};

export const currencySelectChange = (props: CurrencySelectChange) => {
  const { event, counterInput } = props;
  const selectEl = event.target as HTMLSelectElement;
  const inputEl = selectEl
    .closest('.input-group')
    ?.querySelector('.floating-input') as HTMLInputElement;
  const selectedValue = selectEl.value;
  const currencyList = store.getState().currencyList.data;
  const currencyListWithBase = [
    { ccy: 'UAH', sale: '1', buy: '1', base_ccy: 'UAH' },
    ...currencyList
  ];
  const selectedCurrencyData = currencyListWithBase.find(
    (currency: Currency) => currency.ccy === selectedValue
  );
  if (!selectedCurrencyData) return;
  const { ccy, sale, buy } = selectedCurrencyData;

  store.dispatch(
    setCounterCurrency({
      counterInputType: counterInput,
      counterCurrency: { name: ccy, value: 0, sale, buy }
    })
  );
  changeCurrencyValue({ counterInput, inputEl });
};
