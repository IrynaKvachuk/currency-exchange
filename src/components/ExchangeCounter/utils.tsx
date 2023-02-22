import { setCounterCurrency } from '../../features/currencyCounter/currencyCounterActions';
import { CounterInputType } from '../../features/currencyCounter/currencyCounterTypes';
import store from '../../store';
import { changeCurrencyValue } from '../CurrencyInput/utils';
import { CheckForChanges, SetInitCurrencyValues } from './types';

export const setInitCurrencyValues = (props: SetInitCurrencyValues) => {
  const { selectedCurToGet, firstForeignCurrency } = props;
  if (selectedCurToGet.name) return;
  const { ccy, buy, sale } = firstForeignCurrency;
  const curToGet = {
    name: ccy,
    buy,
    sale,
    value: (1 / Number(sale)).toFixed(4)
  };

  store.dispatch(
    setCounterCurrency({
      counterInputType: 'currencyToGet',
      counterCurrency: curToGet
    })
  );
};

export const checkForChanges = (props: CheckForChanges) => {
  const { changedCurrency, selectedCurToChange, selectedCurToGet } = props;

  // return if no changes
  if (!changedCurrency) return;
  const { ccy, sale, buy } = changedCurrency;
  const prevCurValues = selectedCurToChange.name === ccy ? selectedCurToChange : selectedCurToGet;
  // return if changes do NOT affect calculations
  if (prevCurValues.name !== changedCurrency.ccy) return;

  const counterTypeToChange: CounterInputType =
    selectedCurToChange.name === ccy ? 'currencyToChange' : 'currencyToGet';
  const inputEl = document.querySelector(`#currencyToChange`) as HTMLInputElement;

  store.dispatch(
    setCounterCurrency({
      counterInputType: counterTypeToChange,
      counterCurrency: {
        ...prevCurValues,
        sale: sale || prevCurValues.sale,
        buy: buy || prevCurValues.buy
      }
    })
  );
  changeCurrencyValue({ counterInput: 'currencyToChange', inputEl });

  return;
};
