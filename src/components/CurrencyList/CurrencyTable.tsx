import { Currency } from '../../features/currency/currencyTypes';
import CellWrapper from './Cell';

type Props = {
  currencyList: Array<Currency>;
};

const CurrencyTable: React.FC<Props> = (props: Props) => {
  const { currencyList } = props;

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
                {ccy}
              </th>
              <CellWrapper value={buy} id={ccy + 'ToBuy'} />
              <CellWrapper value={sale} id={ccy + 'ToSale'} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CurrencyTable;
