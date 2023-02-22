import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ExchangeType } from '../../../features/currency/currencyTypes';
import { selectCurrencyListFocusedCell } from '../../../features/currencyList/currencyListSelects';
import CellEdit from './CellEdit';
import { editClick } from './utils';

export type CellProps = {
  value: string;
  id: string;
  ccy: string;
  exchangeType: ExchangeType;
  onChange: (newValue: string) => void;
};

const Cell: React.FC<CellProps> = (props: CellProps) => {
  const { value = '', id, ccy, exchangeType, onChange } = props;

  const [text, setText] = useState<string>(value);

  const focusedCell = useSelector(selectCurrencyListFocusedCell);

  useEffect(() => {
    setText(value);
  }, [value]);

  if (focusedCell === id)
    return CellEdit({ initText: value, text, ccy, exchangeType, setText, onChange });
  if (focusedCell !== id)
    return (
      <div data-testid="table-cell" onClick={() => editClick({ id, initText: value, setText })}>
        {text.substring(0, text.indexOf('.') + 3)}
      </div>
    );
  return null;
};

export default Cell;
