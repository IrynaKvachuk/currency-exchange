import { Currency } from '../../features/currency/currencyTypes';
import CellWrapper from './Cell';

type Props = {
  currencyList: Array<Currency>;
};

const CurrencyTable: React.FC<Props> = (props: Props) => {
  const { currencyList } = props;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Currency/Current Date</th>
          <th scope="col">Buy</th>
          <th scope="col">Sell</th>
        </tr>
      </thead>
      <tbody>
        {currencyList.map((currency: Currency) => {
          const { ccy, buy, sale } = currency;
          return (
            <tr key={ccy}>
              <th scope="row">{ccy}</th>
              <CellWrapper value={buy} />
              <CellWrapper value={sale} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CurrencyTable;
