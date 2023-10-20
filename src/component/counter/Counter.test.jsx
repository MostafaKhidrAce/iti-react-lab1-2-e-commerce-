import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders initial count of 0', () => {
  render(<Counter />);
  const countElement = screen.getByText('Count: 0');
  expect(countElement).toBeInTheDocument();
});

test('increments count when the "Increment" button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);
  const countElement = screen.getByText('Count: 1');
  expect(countElement).toBeInTheDocument();
});

test('decrements count when the "Decrement" button is clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('Decrement');
  fireEvent.click(decrementButton);
  const countElement = screen.getByText('Count: -1');
  expect(countElement).toBeInTheDocument();
});
