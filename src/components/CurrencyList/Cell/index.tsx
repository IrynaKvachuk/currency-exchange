import Cell from './Cell';

type Props = {
  value: string;
  id: string;
};

const CellWrapper = (props: Props) => {
  const { value, id } = props;
  let cellValue = value;

  return (
    <td className="cur-value-col text-center" data-editable="true">
      <Cell value={cellValue} id={id} onChange={(newValue: string) => (cellValue = newValue)} />
    </td>
  );
};

export default CellWrapper;
