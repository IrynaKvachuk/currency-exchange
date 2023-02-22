import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '../../setupTests';
import store from '../../store';
import CurrencyInput from '.';

describe('CurrencyInput', () => {
  const setUp = () => {
    const label = 'Change';
    const counterCurrency = {
      name: 'UAH',
      value: '1.0000',
      buy: '1',
      sale: '1'
    };
    const currencyListCCY = ['UAH', 'USD'];

    const utils = render(
      <Router>
        <Provider store={store}>
          <CurrencyInput
            counterInput="currencyToChange"
            label={label}
            selectedOption={counterCurrency}
            currencyListCCY={currencyListCCY}
          />
        </Provider>
      </Router>
    );
    const input = screen.getByLabelText(label);

    return {
      input,
      selectedOption: counterCurrency,
      ...utils
    };
  };
  test('render currency input', () => {
    const { input, selectedOption } = setUp();
    const inputValue = (input as HTMLInputElement).value;

    expect(inputValue).toBe(selectedOption.value);
  });
});
