import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrencyListRequest } from '../../features/currencyList/currencyListActions';
import {
  selectCurrencyList,
  selectCurrencyListErrorStatus,
  selectCurrencyListStatus
} from '../../features/currencyList/currencyListSelects';
import Container from '../../layout/Container';
import ErrorMessage from '../ErrorMessage';
import Loader from '../icons/Loader';
import CurrencyTable from './CurrencyTable';

const CurrencyList = () => {
  const currencyList = useSelector(selectCurrencyList);
  const currencyListStatus = useSelector(selectCurrencyListStatus);
  const currencyListErrorStatus = useSelector(selectCurrencyListErrorStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencyListRequest());
  }, [dispatch]);

  return (
    <Container>
      {currencyListStatus === 'loading' && <Loader />}
      {currencyListStatus === 'success' && <CurrencyTable currencyList={currencyList} />}
      {currencyListStatus === 'failed' && <ErrorMessage errorStatus={currencyListErrorStatus} />}
    </Container>
  );
};

export default CurrencyList;
