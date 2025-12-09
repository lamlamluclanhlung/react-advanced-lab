// Exercise 4.1 – Integration test for LoginForm
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';

test('user can login successfully and sees welcome message', async () => {
  const user = userEvent.setup();

  const fakeOnLogin = jest.fn(async ({ email, password }) => {
    if (email === 'test@example.com' && password === '123456') return true;
    return false;
  });

  render(<LoginForm onLogin={fakeOnLogin} />);

  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });

  await user.type(emailInput, 'test@example.com');
  await user.type(passwordInput, '123456');
  await user.click(submitButton);

  const message = await screen.findByText(/welcome back/i);
  expect(message).toBeInTheDocument();

  expect(fakeOnLogin).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: '123456',
  });
});
