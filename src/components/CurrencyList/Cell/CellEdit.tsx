import { ExchangeType } from '../../../features/currency/currencyTypes';
import { closeClick, inputChange, saveClick } from './utils';

export type CellEditProps = {
  initText: string;
  text: string;
  ccy: string;
  exchangeType: ExchangeType;
  setText: (newText: string) => void;
  onChange: (newValue: string) => void;
};

const CellEdit: React.FC<CellEditProps> = (props: CellEditProps) => {
  const { initText, text, ccy, exchangeType, setText, onChange } = props;

  return (
    <div className="exchange_cell-edit-group">
      <input
        type="text"
        className="cell-input"
        value={text}
        data-testid="edit-cell-input"
        pattern="^\d*(\.\d{0,5})?$"
        onChange={(event) => inputChange({ event, initValue: initText, setText })}
      />
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-primary"
          data-testid="edit-save-btn"
          onClick={() => saveClick({ text, ccy, exchangeType, onChange })}
        >
          &#10003;
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          data-testid="edit-close-btn"
          onClick={() => closeClick({ initText, setText })}
        >
          &#9587;
        </button>
      </div>
    </div>
  );
};

export default CellEdit;
