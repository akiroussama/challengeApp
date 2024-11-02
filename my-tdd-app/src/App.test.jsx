import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to the TDD Challenge/)).toBeInTheDocument();
});

test('displays a counter starting at 0', () => {
  render(<App />);
  expect(screen.getByText(/Count: 0/)).toBeInTheDocument();
});

test('increments the counter when button is clicked', () => {
  render(<App />);
  const button = screen.getByText(/Increment/);
  button.click();
  expect(screen.getByText(/Count: 1/)).toBeInTheDocument();
});

test('displays a greeting message', () => {
  render(<App />);
  expect(screen.getByText(/Hello, User!/)).toBeInTheDocument();
});

test('toggles a feature on and off', () => {
  render(<App />);
  const toggleButton = screen.getByText(/Toggle Feature/);
  toggleButton.click();
  expect(screen.getByText(/Feature is\s+ON/i)).toBeInTheDocument();
  toggleButton.click();
  expect(screen.getByText(/Feature is\s+OFF/i)).toBeInTheDocument();
});