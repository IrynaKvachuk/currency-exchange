import React, { useEffect, useState } from 'react';
import CellEdit from './CellEdit';
import { CellMode } from './types';
import { editClick } from './utils';

type Props = {
  value: string;
  onChange: (newValue: string) => void;
};

const Cell: React.FC<Props> = (props: Props) => {
  const { value = '', onChange } = props;

  const [mode, setMode] = useState<CellMode>('read');
  const [text, setText] = useState<string>(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  if (mode === 'edit') return CellEdit({ initText: value, text, setText, setMode, onChange });
  if (mode === 'read') return <div onClick={() => editClick({ setMode })}>{text}</div>;
  return null;
};

export default Cell;
