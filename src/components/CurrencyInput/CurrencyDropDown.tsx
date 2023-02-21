import React from 'react';
import {
  CounterCurrency,
  CounterInputType
} from '../../features/currencyCounter/currencyCounterTypes';
import { currencySelectChange } from './events';

type Props = {
  counterInput: CounterInputType;
  selectedOption: CounterCurrency;
  currencyListCCY: Array<string>;
};

const CurrencyDropDown: React.FC<Props> = (props: Props) => {
  const { counterInput, selectedOption, currencyListCCY } = props;

  return (
    <div className="input-drop-down input-group-append">
      <select
        className="form-select"
        aria-label="Default select example"
        value={selectedOption.name}
        onChange={(event) => currencySelectChange({ event, counterInput })}
      >
        {currencyListCCY.map((ccy) => {
          return (
            <option key={ccy} value={ccy}>
              {ccy}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencyDropDown;
