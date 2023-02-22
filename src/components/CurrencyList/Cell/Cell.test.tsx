import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import { CellProps } from './Cell';
import store from '../../../store';
import '../../../setupTests';
import Cell from './Cell';

const setUp = () => {
  const mockData: CellProps = {
    value: '',
    id: 'UAHToBuy',
    ccy: 'UAH',
    exchangeType: 'buy',
    onChange: jest.fn()
  };

  const utils = render(
    <Router>
      <Provider store={store}>
        <Cell {...mockData} />
      </Provider>
    </Router>
  );
  const tableInput = screen.getByTestId('table-cell');

  return {
    tableInput,
    mockData,
    ...utils
  };
};

describe('Cell', () => {
  test('renders cell div properly', () => {
    const { tableInput } = setUp();

    expect(tableInput).toBeInTheDocument();
  });

  test('open and close edit mode for cell', () => {
    const { tableInput } = setUp();

    fireEvent.click(tableInput);
    const editCell = screen.getByTestId('edit-cell-input');
    const closeBtn = screen.getByTestId('edit-close-btn');
    expect(editCell).toBeInTheDocument();
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn);
  });

  test('edit cell', async () => {
    const { tableInput } = setUp();
    const mockTypingEvent = {
      target: {
        value: '111111'
      }
    };
    fireEvent.click(tableInput);
    const editCell = screen.getByTestId('edit-cell-input');
    const saveBtn = screen.getByTestId('edit-save-btn');

    await fireEvent.change(editCell, mockTypingEvent);
    await fireEvent.click(saveBtn);

    expect(tableInput).toBeInTheDocument();
  });
});
