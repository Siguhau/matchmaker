import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the match generator', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /match generator/i })
  ).toBeInTheDocument();
});
