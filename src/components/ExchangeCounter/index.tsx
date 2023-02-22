import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrencyToChange,
  selectCurrencyToGet
} from '../../features/currencyCounter/currencyCounterSelects';
import {
  selectChangedCurrency,
  selectCurrencyList,
  selectCurrencyListStatus
} from '../../features/currencyList/currencyListSelects';
import Container from '../../layout/Container';
import CurrencyInput from '../CurrencyInput';
import { swapBtnClick } from './events';
import { checkForChanges, setInitCurrencyValues } from './utils';

const ExchangeCounter = () => {
  const [currencyListCCY, setCurrencyListCCY] = useState<Array<string>>([]);

  const currencyListStatus = useSelector(selectCurrencyListStatus);
  const currencyList = useSelector(selectCurrencyList);
  const selectedCurToChange = useSelector(selectCurrencyToChange);
  const selectedCurToGet = useSelector(selectCurrencyToGet);
  const changedCurrency = useSelector(selectChangedCurrency);

  useEffect(() => {
    if (!currencyList.length || currencyListCCY.length) return;
    const { base_ccy } = currencyList[0];
    const ccyList = currencyList.map((currency) => currency.ccy);

    setInitCurrencyValues({ selectedCurToGet, firstForeignCurrency: currencyList[0] });
    setCurrencyListCCY([base_ccy, ...ccyList]);
  }, [currencyList]);

  // convert currency if value in table was changed
  useEffect(() => {
    checkForChanges({ changedCurrency, selectedCurToChange, selectedCurToGet });
  }, [changedCurrency]);

  return (
    <Container>
      {currencyListStatus === 'success' && (
        <section className="exchange_counter">
          <CurrencyInput
            label="Change"
            counterInput="currencyToChange"
            selectedOption={selectedCurToChange}
            currencyListCCY={currencyListCCY}
          />
          <button
            type="button"
            className="exchange_btn btn-swap btn btn-dark"
            onClick={(event) => swapBtnClick({ event })}
            value="8644"
          >
            &#8644;
          </button>
          <CurrencyInput
            label="Get"
            counterInput="currencyToGet"
            selectedOption={selectedCurToGet}
            currencyListCCY={currencyListCCY}
          />
        </section>
      )}
    </Container>
  );
};

export default ExchangeCounter;
