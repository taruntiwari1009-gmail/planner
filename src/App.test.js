import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the planner dashboard widgets', () => {
  render(<App />);
  expect(screen.getByText('Timer')).toBeInTheDocument();
  expect(screen.getByText('Reminder List')).toBeInTheDocument();
});
