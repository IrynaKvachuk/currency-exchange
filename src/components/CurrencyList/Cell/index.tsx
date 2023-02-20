import { ExchangeType } from '../../../features/currency/currencyTypes';
import Cell from './Cell';

type Props = {
  value: string;
  id: string;
  ccy: string;
  exchangeType: ExchangeType;
};

const CellWrapper = (props: Props) => {
  const { value, id, ccy, exchangeType } = props;
  let cellValue = value;

  return (
    <td className="cur-value-col text-center" data-editable="true">
      <Cell
        value={cellValue}
        id={id}
        ccy={ccy}
        exchangeType={exchangeType}
        onChange={(newValue: string) => (cellValue = newValue)}
      />
    </td>
  );
};

export default CellWrapper;
