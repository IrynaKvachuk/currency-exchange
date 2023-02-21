import { useSelector } from 'react-redux';
import {
  selectCurrencyList,
  selectCurrencyListErrorStatus,
  selectCurrencyListStatus
} from '../../features/currencyList/currencyListSelects';
import Container from '../../layout/Container';
import ErrorMessage from '../ErrorMessage';
import Loader from '../icons/Loader';
import CurrencyTable from './CurrencyTable';
import { useEffectOnce } from '../../hooks/UseEffectOnce';
import { getCurrencyData } from './utils';
import TopToolbar from './TopToolbar';

const CurrencyList = () => {
  const currencyList = useSelector(selectCurrencyList);
  const currencyListStatus = useSelector(selectCurrencyListStatus);
  const currencyListErrorStatus = useSelector(selectCurrencyListErrorStatus);

  useEffectOnce(() => {
    getCurrencyData();
  });

  return (
    <Container classList="currency-list">
      {currencyListStatus === 'loading' && <Loader />}
      {currencyListStatus === 'success' && <TopToolbar />}
      {currencyListStatus === 'success' && <CurrencyTable currencyList={currencyList} />}
      {currencyListStatus === 'failed' && <ErrorMessage errorData={currencyListErrorStatus} />}
    </Container>
  );
};

export default CurrencyList;
