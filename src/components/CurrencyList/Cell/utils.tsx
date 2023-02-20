import store from '../../../store';
import {
  setFocusedCell,
  setNewCurrencyValue
} from '../../../features/currencyList/currencyListActions';
import {
  CheckAllowedDiff,
  CheckAllowedSymbols,
  CloseClick,
  DisableSaveBtn,
  EditClick,
  InputChange,
  SaveClick
} from './types';

const disableSaveBtn = (props: DisableSaveBtn) => {
  const { inputEl, disabled } = props;
  const saveBtn = inputEl
    .closest('.exchange_cell-edit-group')
    ?.querySelector('.btn-outline-primary') as HTMLButtonElement;

  if (!saveBtn) return;
  saveBtn.disabled = disabled;

  return;
};

const checkAllowedDiff = (props: CheckAllowedDiff) => {
  const { newValue, initValue } = props;

  const maxDiff = newValue / 10;
  const diff = Math.abs(newValue - Number(initValue));
  const notAllowedRange = diff > maxDiff;

  return notAllowedRange;
};

const checkAllowedSymbols = (props: CheckAllowedSymbols) => {
  const { inputEl } = props;
  const notAllowedSymbols = !inputEl.checkValidity();

  return notAllowedSymbols;
};

export const inputChange = (props: InputChange) => {
  const { event, initValue, setText } = props;

  if (!event.target) return;
  const inputEl = event.target as HTMLInputElement;
  const newValue = inputEl.value;
  const notAllowedDiff = checkAllowedDiff({
    inputEl,
    newValue: Number(newValue),
    initValue: Number(initValue)
  });
  const notAllowedSymbols = checkAllowedSymbols({ inputEl });

  setText(newValue);
  disableSaveBtn({ inputEl, disabled: notAllowedDiff || notAllowedSymbols });

  return;
};

export const editClick = (props: EditClick) => {
  const { id } = props;

  store.dispatch(setFocusedCell(id));

  return;
};

export const saveClick = (props: SaveClick) => {
  const { text, ccy, exchangeType, onChange } = props;

  if (onChange) onChange(text);
  store.dispatch(setNewCurrencyValue({ ccy, [exchangeType]: text }));
  store.dispatch(setFocusedCell(''));

  return;
};

export const closeClick = (props: CloseClick) => {
  const { initText, setText } = props;

  setText(initText);
  store.dispatch(setFocusedCell(''));

  return;
};
