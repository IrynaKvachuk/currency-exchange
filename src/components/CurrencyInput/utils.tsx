import { setCounterCurrencyValue } from '../../features/currencyCounter/currencyCounterActions';
import { CounterCurrency } from '../../features/currencyCounter/currencyCounterTypes';
import store from '../../store';
import { CalculateCurrencyValue, ChangeCurrencyValue, GetOppositeValue } from './types';

// convert UAH
const calculateBase = (props: CalculateCurrencyValue) => {
  const { counterInput, amount, stateToChange, stateToGet } = props;
  const foreignCurrency = stateToChange.name === 'UAH' ? stateToGet : stateToChange;
  const { buy, sale } = foreignCurrency;

  if (counterInput === 'currencyToChange') return amount / Number(sale);
  return amount * Number(buy);
};

// double converting
const calculateCurValue = (props: CalculateCurrencyValue) => {
  const { counterInput, amount, stateToChange, stateToGet } = props;
  const buy = counterInput === 'currencyToChange' ? stateToChange.buy : stateToGet.buy;
  const sale = counterInput === 'currencyToChange' ? stateToGet.sale : stateToChange.sale;

  return (amount * Number(buy)) / Number(sale);
};

// get exchange result amount
const getOppositeValue = (props: GetOppositeValue) => {
  const { counterInput, amount } = props;
  const stateToChange: CounterCurrency = store.getState().currencyCounter.currencyToChange;
  const stateToGet: CounterCurrency = store.getState().currencyCounter.currencyToGet;

  if (stateToChange.name === stateToGet.name) return amount;
  if (stateToChange.name === 'UAH' || stateToGet.name === 'UAH')
    return calculateBase({ counterInput, amount, stateToChange, stateToGet });
  return calculateCurValue({ counterInput, amount, stateToChange, stateToGet });
};

export const changeCurrencyValue = (props: ChangeCurrencyValue) => {
  const { inputEl, counterInput } = props;

  const amount = Number(inputEl.value);
  const oppositeInput = counterInput === 'currencyToChange' ? 'currencyToGet' : 'currencyToChange';

  store.dispatch(setCounterCurrencyValue({ counterInputType: counterInput, value: amount }));
  const oppositeAmount = getOppositeValue({ counterInput, amount });
  store.dispatch(
    setCounterCurrencyValue({ counterInputType: oppositeInput, value: oppositeAmount })
  );

  return;
};
