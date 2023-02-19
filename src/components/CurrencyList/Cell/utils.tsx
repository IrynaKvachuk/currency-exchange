import store from '../../../store';
import { setFocusedCell } from '../../../features/currencyList/currencyListActions';
import { CheckAllowedDiff, CloseClick, EditClick, InputChange, SaveClick } from './types';

const checkAllowedDiff = (props: CheckAllowedDiff) => {
  const { inputEl, newValue, initValue } = props;
  const saveBtn = inputEl
    .closest('.exchange_cell-group')
    ?.querySelector('.btn-outline-primary') as HTMLButtonElement;

  if (!saveBtn) return;
  const maxDiff = newValue / 10;
  const diff = Math.abs(newValue - Number(initValue));
  saveBtn.disabled = diff > maxDiff;

  return;
};

export const inputChange = (props: InputChange) => {
  const { event, initValue, setText } = props;

  if (!event.target) return;
  const inputEl = event.target as HTMLInputElement;
  const newValue = inputEl.value;

  setText(newValue);
  checkAllowedDiff({ inputEl, newValue: Number(newValue), initValue: Number(initValue) });

  return;
};

export const editClick = (props: EditClick) => {
  const { id, setMode } = props;

  store.dispatch(setFocusedCell(id));
  setMode('edit');

  return;
};

export const saveClick = (props: SaveClick) => {
  const { text, setMode, onChange } = props;
  setMode('read');
  if (onChange) onChange(text);

  return;
};

export const closeClick = (props: CloseClick) => {
  const { initText, setMode, setText } = props;
  setMode('read');
  setText(initText);

  return;
};
