import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders initial count of 0', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments count when the "Increment" button is enabled', () => {
  render(<Counter />);
  const incrementButton = screen.getByRole('button', { name: /Increment/i });
  expect(incrementButton).toBeInTheDocument();
  expect(incrementButton).toBeEnabled();
});

test('decrements count when the "Decrement" button is enabled', () => {
  render(<Counter />);
  const decrementButton = screen.getByRole('button', { name: /Decrement/i });
  expect(decrementButton).toBeInTheDocument();
  expect(decrementButton).toBeEnabled();
});

test('count  1 when "Increment" button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByRole('button', { name: /Increment/i });
  fireEvent.click(incrementButton);
  const incrementedCountElement = screen.getByText(/Count: 1/i);
  expect(incrementedCountElement).toBeInTheDocument();
});

test('count -1 when "Decrement" button is clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByRole('button', { name: /Decrement/i });
  fireEvent.click(decrementButton);
  const decrementedCountElement = screen.getByText(/Count: -1/i);
  expect(decrementedCountElement).toBeInTheDocument();
});
