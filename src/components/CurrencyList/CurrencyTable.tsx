import { useSelector } from 'react-redux';
import { Currency } from '../../features/currency/currencyTypes';
import {
  selectEditTypeError,
  selectEditValueError
} from '../../features/currencyList/currencyListSelects';
import CellWrapper from './Cell';

type Props = {
  currencyList: Array<Currency>;
};

const CurrencyTable: React.FC<Props> = (props: Props) => {
  const { currencyList } = props;
  const typeErrorMessage = '* Numbers with a max of five decimal places are allowed.';
  const valueErrorMessage = '* Possible range of change +/- 10% from the initial value';

  const editTypeError = useSelector(selectEditTypeError);
  const editValueError = useSelector(selectEditValueError);

  return (
    <table className="exchange_table table table-bordered table-hover table-fixed">
      <thead className="table-dark">
        <tr>
          <th scope="col" className="cur-name-col text-center">
            Currency/Current Date
          </th>
          <th scope="col" className="cur-value-col text-center">
            Buy
          </th>
          <th scope="col" className="cur-value-col text-center">
            Sell
          </th>
        </tr>
      </thead>
      <tbody>
        {currencyList.map((currency: Currency) => {
          const { ccy, buy, sale } = currency;
          return (
            <tr key={ccy}>
              <th scope="row" className="text-center">
                {ccy}/UAH
              </th>
              <CellWrapper value={buy} id={ccy + 'ToBuy'} ccy={ccy} exchangeType="buy" />
              <CellWrapper value={sale} id={ccy + 'ToSale'} ccy={ccy} exchangeType="sale" />
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <div className="error-validation">
          {editTypeError ? typeErrorMessage : ''}
          {editValueError ? valueErrorMessage : ''}
        </div>
      </tfoot>
    </table>
  );
};

export default CurrencyTable;
