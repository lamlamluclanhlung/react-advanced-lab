// Exercise 1.1 – UserProfile using useReducer fetch machine
import React, { useEffect, useReducer } from 'react';
import { userProfileReducer, initialState } from './userProfileReducer';

export default function UserProfile({ userId }) {
  const [state, dispatch] = useReducer(userProfileReducer, initialState);
  const { status, data, error } = state;

  useEffect(() => {
    if (!userId) return;

    dispatch({ type: 'FETCH_INIT' });

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((user) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: user });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_FAILURE', payload: err.message });
      });
  }, [userId]);

  if (status === 'idle') return <p>Chọn user để xem thông tin.</p>;
  if (status === 'loading') return <p>Đang tải...</p>;
  if (status === 'rejected') return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Website: {data.website}</p>
    </div>
  );
}
