import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCounterCurrency } from '../../features/currencyCounter/currencyCounterActions';
import {
  selectCurrencyToChange,
  selectCurrencyToGet
} from '../../features/currencyCounter/currencyCounterSelects';
import { selectCurrencyList } from '../../features/currencyList/currencyListSelects';
import Container from '../../layout/Container';
import CurrencyInput from '../CurrencyInput';
import { swapBtnClick } from './events';

const ExchangeCounter = () => {
  const dispatch = useDispatch();

  const [currencyListCCY, setCurrencyListCCY] = useState<Array<string>>([]);

  const currencyList = useSelector(selectCurrencyList);
  const selectedCurToChange = useSelector(selectCurrencyToChange);
  const selectedCurToGet = useSelector(selectCurrencyToGet);

  useEffect(() => {
    if (!currencyList.length) return;
    const { base_ccy, ccy, buy, sale } = currencyList[0];
    const ccyList = currencyList.map((currency) => currency.ccy);
    const curToGet = {
      name: ccy,
      buy,
      sale,
      value: 1 / Number(sale)
    };

    setCurrencyListCCY([base_ccy, ...ccyList]);
    dispatch(
      setCounterCurrency({
        counterInputType: 'currencyToGet',
        counterCurrency: curToGet
      })
    );
  }, [currencyList]);

  return (
    <Container>
      <section className="exchange_counter">
        <CurrencyInput
          label="Change"
          counterInput="currencyToChange"
          selectedOption={selectedCurToChange}
          currencyListCCY={currencyListCCY}
        />
        <button
          type="button"
          className="btn-swap btn btn-dark"
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
    </Container>
  );
};

export default ExchangeCounter;
