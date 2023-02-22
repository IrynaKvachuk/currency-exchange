import { ChangedCurrency, Currency } from '../../features/currency/currencyTypes';
import { CounterCurrency } from '../../features/currencyCounter/currencyCounterTypes';

export type SwapBtnClick = {
  event: React.MouseEvent<HTMLButtonElement>;
};

export type SetInitCurrencyValues = {
  selectedCurToGet: CounterCurrency;
  firstForeignCurrency: Currency;
};

export type CheckForChanges = {
  changedCurrency: ChangedCurrency | null;
  selectedCurToChange: CounterCurrency;
  selectedCurToGet: CounterCurrency;
};
