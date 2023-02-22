import {
  CounterCurrency,
  CounterInputType
} from '../../features/currencyCounter/currencyCounterTypes';
import CurrencyDropDown from './CurrencyDropDown';
import { currencyValueInputChange } from './events';

type Props = {
  counterInput: CounterInputType;
  label: string;
  selectedOption: CounterCurrency;
  currencyListCCY: Array<string>;
};

const CurrencyInput: React.FC<Props> = (props: Props) => {
  const { label = '', selectedOption, counterInput, currencyListCCY } = props;

  return (
    <div className="input-group">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="floating-input form-control"
          id={counterInput}
          name="floatingInput"
          pattern="^\d*(\.\d{0,5})?$"
          placeholder={label}
          value={selectedOption.value}
          onChange={(event) => currencyValueInputChange({ event, counterInput })}
        />
        <label className="floating-input-label" htmlFor="floatingInput">
          {label}
        </label>
      </div>
      <CurrencyDropDown
        counterInput={counterInput}
        selectedOption={selectedOption}
        currencyListCCY={currencyListCCY}
      />
    </div>
  );
};

export default CurrencyInput;
