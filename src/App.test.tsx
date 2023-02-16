import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store';

test('renders main', async () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );

  await waitFor(async () => {
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
});
