import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import CellEdit, { CellEditProps } from './CellEdit';
import store from '../../../store';
import '../../../setupTests';

describe('CellEdit', () => {
  const setUp = () => {
    const mockData: CellEditProps = {
      initText: '',
      text: '1.0000',
      ccy: 'UAH',
      exchangeType: 'buy',
      setText: jest.fn(),
      onChange: jest.fn()
    };

    const utils = render(
      <Router>
        <Provider store={store}>
          <CellEdit {...mockData} />
        </Provider>
      </Router>
    );
    const input = screen.getByTestId('edit-cell-input');

    return {
      input,
      mockData,
      ...utils
    };
  };
  test('renders edit input properly', () => {
    const { input } = setUp();

    expect(input).toBeInTheDocument();
  });

  test('calls onChange function', () => {
    const mockTypingEvent = {
      target: {
        value: '111111'
      }
    };
    const { input, mockData } = setUp();
    const { setText } = mockData;

    fireEvent.change(input, mockTypingEvent);

    expect(setText).toBeCalledTimes(1);
  });
});
