import store from '../../../store';
import {
  clearEditState,
  setEditError,
  setFocusedCell,
  setNewCurrencyValue
} from '../../../features/currencyList/currencyListActions';
import {
  CheckAllowedValue,
  CheckAllowedType,
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

const checkAllowedValue = (props: CheckAllowedValue) => {
  const { newValue, initValue } = props;

  const maxDiff = newValue / 10;
  const diff = Math.abs(newValue - Number(initValue));
  const notAllowedRange = diff > maxDiff;

  store.dispatch(setEditError({ editErrorType: 'editValueError', value: notAllowedRange }));
  return notAllowedRange;
};

const checkAllowedType = (props: CheckAllowedType) => {
  const { inputEl } = props;
  const notAllowedType = !inputEl.checkValidity();

  store.dispatch(setEditError({ editErrorType: 'editTypeError', value: notAllowedType }));
  return notAllowedType;
};

export const inputChange = (props: InputChange) => {
  const { event, initValue, setText } = props;

  if (!event.target) return;
  const inputEl = event.target as HTMLInputElement;
  const newValue = inputEl.value;
  const notAllowedDiff = checkAllowedValue({
    inputEl,
    newValue: Number(newValue),
    initValue: Number(initValue)
  });
  const notAllowedSymbols = checkAllowedType({ inputEl });

  setText(newValue);
  disableSaveBtn({ inputEl, disabled: notAllowedDiff || notAllowedSymbols });

  return;
};

export const editClick = (props: EditClick) => {
  const { id, initText, setText } = props;

  setText(initText);
  store.dispatch(setFocusedCell(id));

  return;
};

export const saveClick = (props: SaveClick) => {
  const { text, ccy, exchangeType, onChange } = props;

  if (onChange) onChange(text);
  store.dispatch(setNewCurrencyValue({ ccy, [exchangeType]: text }));
  store.dispatch(clearEditState());

  return;
};

export const closeClick = (props: CloseClick) => {
  const { initText, setText } = props;

  setText(initText);
  store.dispatch(clearEditState());

  return;
};
