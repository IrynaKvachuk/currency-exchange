import { ExchangeType } from '../../../features/currency/currencyTypes';
import { closeClick, inputChange, saveClick } from './utils';

type Props = {
  initText: string;
  text: string;
  ccy: string;
  exchangeType: ExchangeType;
  setText: (newText: string) => void;
  onChange: (newValue: string) => void;
};

const CellEdit: React.FC<Props> = (props: Props) => {
  const { initText, text, ccy, exchangeType, setText, onChange } = props;

  return (
    <div className="exchange_cell-edit-group">
      <input
        type="text"
        className="cell-input"
        value={text}
        pattern="^\d*(\.\d{0,5})?$"
        onChange={(event) => inputChange({ event, initValue: initText, setText })}
      />
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => saveClick({ text, ccy, exchangeType, onChange })}
        >
          &#10003;
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => closeClick({ initText, setText })}
        >
          &#9587;
        </button>
      </div>
    </div>
  );
};

export default CellEdit;
