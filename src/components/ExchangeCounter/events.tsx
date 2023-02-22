import store from '../../store';
import { swapCurrencies } from '../../features/currencyCounter/currencyCounterActions';
import { SwapBtnClick } from './types';
import { changeCurrencyValue } from '../CurrencyInput/utils';

export const swapBtnClick = (props: SwapBtnClick) => {
  const { event } = props;
  const btnEl = event.target as HTMLButtonElement;
  const inputElToConvert = btnEl
    .closest('.exchange_counter')
    ?.querySelector('#currencyToChange') as HTMLInputElement;
  const isRightArrow = btnEl.value === '8644';

  btnEl.innerHTML = isRightArrow ? '&#8646;' : '&#8644;';
  btnEl.value = isRightArrow ? '8646' : '8644';

  store.dispatch(swapCurrencies());
  changeCurrencyValue({ counterInput: 'currencyToChange', inputEl: inputElToConvert });

  return;
};
