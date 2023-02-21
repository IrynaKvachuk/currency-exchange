import { ExchangeType } from '../../../features/currency/currencyTypes';

export type CellMode = 'edit' | 'read';

export type DisableSaveBtn = {
  inputEl: HTMLInputElement;
  disabled: boolean;
};

export type CheckAllowedValue = {
  inputEl: HTMLInputElement;
  newValue: number;
  initValue: number;
};

export type CheckAllowedType = {
  inputEl: HTMLInputElement;
};

export type InputChange = {
  event: React.ChangeEvent;
  initValue: string;
  setText: (newText: string) => void;
};

export type EditClick = {
  id: string;
  initText: string;
  setText: (newText: string) => void;
};

export type SaveClick = {
  text: string;
  ccy: string;
  exchangeType: ExchangeType;
  onChange?: (newValue: string) => void;
};

export type CloseClick = {
  initText: string;
  setText: (newText: string) => void;
};
