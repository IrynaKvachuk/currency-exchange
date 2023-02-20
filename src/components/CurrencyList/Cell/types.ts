export type CellMode = 'edit' | 'read';

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
  id: string;
};

export type SaveClick = {
  text: string;
  onChange?: (newValue: string) => void;
};

export type CloseClick = {
  initText: string;
  setText: (newText: string) => void;
};
