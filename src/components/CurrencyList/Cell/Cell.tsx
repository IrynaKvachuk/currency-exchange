import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrencyListFocusedCell } from '../../../features/currencyList/currencyListSelects';
import CellEdit from './CellEdit';
import { CellMode } from './types';
import { editClick } from './utils';

type Props = {
  value: string;
  id: string;
  onChange: (newValue: string) => void;
};

const Cell: React.FC<Props> = (props: Props) => {
  const { value = '', id, onChange } = props;

  const [mode, setMode] = useState<CellMode>('read');
  const [text, setText] = useState<string>(value);

  const focusedCell = useSelector(selectCurrencyListFocusedCell);

  useEffect(() => {
    setText(value);
  }, [value]);

  if (mode === 'edit' && focusedCell === id)
    return CellEdit({ initText: value, text, setText, setMode, onChange });
  if (mode === 'read')
    return (
      <div onClick={() => editClick({ id, setMode })}>
        {text.substring(0, text.indexOf('.') + 2)}
      </div>
    );
  return null;
};

export default Cell;
