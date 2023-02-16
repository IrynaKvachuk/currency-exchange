import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main', () => {
  render(<App />);
  const linkElement = screen.getByTestId('main');
  expect(linkElement).toBeInTheDocument();
});
