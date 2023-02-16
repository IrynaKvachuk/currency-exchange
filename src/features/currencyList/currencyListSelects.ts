import { RootStateT } from '../../store/rootReducer';
import { LoadingStatus } from '../_common/types';
import { Currency } from '../ currency/currencyTypes';

export const selectMentors = (state: RootStateT): Array<Currency> => state.currencyList.data;

export const selectMentorsStatus = (state: RootStateT): LoadingStatus => state.currencyList.status;

export const selectMentorsErrorStatus = (state: RootStateT): number | null =>
  state.currencyList.error.status;
