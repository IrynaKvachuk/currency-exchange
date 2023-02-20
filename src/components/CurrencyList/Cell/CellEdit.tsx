import { closeClick, inputChange, saveClick } from './utils';

type Props = {
  initText: string;
  text: string;
  setText: (newText: string) => void;
  onChange: (newValue: string) => void;
};

const CellEdit: React.FC<Props> = (props: Props) => {
  const { initText, text, setText, onChange } = props;

  return (
    <div className="exchange_cell-group">
      <input
        type="text"
        className="cell-input"
        value={text}
        onChange={(event) => inputChange({ event, initValue: initText, setText })}
      />
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => saveClick({ text, onChange })}
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
