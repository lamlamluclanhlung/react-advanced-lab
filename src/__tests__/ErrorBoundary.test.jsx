// Exercise 4.2 – Test for ErrorBoundary
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppErrorBoundary } from '../AppErrorBoundary';
import Bomb from '../Bomb';

test('error boundary catches error and shows fallback UI', () => {
  const originalError = console.error;
  console.error = jest.fn(); // mute error log

  render(
    <AppErrorBoundary>
      <Bomb />
    </AppErrorBoundary>
  );

  expect(screen.getByRole('alert')).toBeInTheDocument();
  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  expect(screen.getByText(/boom!/i)).toBeInTheDocument();

  console.error = originalError;
});
