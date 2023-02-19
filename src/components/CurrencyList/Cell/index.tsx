import Cell from './Cell';
import { CellProps } from './types';

const CellWrapper = (props: CellProps) => {
  const { value } = props;
  let cellValue = value;

  return (
    <td data-editable="true">
      <Cell value={cellValue} onChange={(newValue: string) => (cellValue = newValue)} />
    </td>
  );
};

export default CellWrapper;
