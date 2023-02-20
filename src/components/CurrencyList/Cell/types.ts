import { ExchangeType } from '../../../features/currency/currencyTypes';

export type CellMode = 'edit' | 'read';

export type DisableSaveBtn = {
  inputEl: HTMLInputElement;
  disabled: boolean;
};

export type CheckAllowedDiff = {
  inputEl: HTMLInputElement;
  newValue: number;
  initValue: number;
};

export type CheckAllowedSymbols = {
  inputEl: HTMLInputElement;
};

export type InputChange = {
  event: React.ChangeEvent;
  initValue: string;
  setText: (newText: string) => void;
};

export type EditClick = {
  id: string;
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
