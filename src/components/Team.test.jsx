import { render, screen } from '@testing-library/react';
import Team from './Team';

test.each([
  [1, 'yellow'],
  [7, 'cyan'],
  [9, 'white'],
])('uses black text for team %i on a %s background', (teamNumber) => {
  render(<Team>{teamNumber}</Team>);

  expect(screen.getByText(String(teamNumber))).toHaveStyle({ color: 'rgb(0, 0, 0)' });
});
