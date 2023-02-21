import { getCurrencyData } from './utils';

const TopToolbar = () => {
  return (
    <button
      className="currency-list_reload-btn exchange_btn btn btn-dark"
      data-toggle="tooltip"
      data-placement="top"
      title="Reload currency data"
      onClick={getCurrencyData}
    >
      &#8635;
    </button>
  );
};

export default TopToolbar;
