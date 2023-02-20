import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrencyListFocusedCell } from '../../../features/currencyList/currencyListSelects';
import CellEdit from './CellEdit';
import { editClick } from './utils';

type Props = {
  value: string;
  id: string;
  onChange: (newValue: string) => void;
};

const Cell: React.FC<Props> = (props: Props) => {
  const { value = '', id, onChange } = props;

  const [text, setText] = useState<string>(value);

  const focusedCell = useSelector(selectCurrencyListFocusedCell);

  useEffect(() => {
    setText(value);
  }, [value]);

  if (focusedCell === id) return CellEdit({ initText: value, text, setText, onChange });
  if (focusedCell !== id)
    return <div onClick={() => editClick({ id })}>{text.substring(0, text.indexOf('.') + 2)}</div>;
  return null;
};

export default Cell;
