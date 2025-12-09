// Exercise 4.1 – LoginForm for integration test
import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const ok = await onLogin({ email, password });
    if (ok) {
      setMessage('Welcome back!');
    } else {
      setMessage('Invalid credentials');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          aria-label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          aria-label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit">Login</button>

      {message && <p>{message}</p>}
    </form>
  );
}
