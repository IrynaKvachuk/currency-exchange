export type CellMode = 'edit' | 'read';

export type CellProps = {
  value: string;
};

export type CheckAllowedDiff = {
  inputEl: HTMLInputElement;
  newValue: number;
  initValue: number;
};

export type InputChange = {
  event: React.ChangeEvent;
  initValue: string;
  setText: (newText: string) => void;
};

export type EditClick = {
  setMode: (newMode: CellMode) => void;
};

export type SaveClick = {
  text: string;
  setMode: (newMode: CellMode) => void;
  onChange?: (newValue: string) => void;
};

export type CloseClick = {
  initText: string;
  setMode: (newMode: CellMode) => void;
  setText: (newText: string) => void;
};
