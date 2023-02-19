import { CellMode } from './types';
import { closeClick, inputChange, saveClick } from './utils';

type Props = {
  initText: string;
  text: string;
  setText: (newText: string) => void;
  setMode: (mode: CellMode) => void;
  onChange: (newValue: string) => void;
};

const CellEdit: React.FC<Props> = (props: Props) => {
  const { initText, text, setText, setMode, onChange } = props;

  return (
    <div className="exchange-cell-group">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => saveClick({ text, setMode, onChange })}
      >
        &#10003;
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => closeClick({ initText, setMode, setText })}
      >
        &#9587;
      </button>
      <input
        type="text"
        value={text}
        onChange={(event) => inputChange({ event, initValue: initText, setText })}
      />
    </div>
  );
};

export default CellEdit;
