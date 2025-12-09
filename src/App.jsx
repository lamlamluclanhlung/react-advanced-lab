import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

// Exercise 2.3 – route-based code splitting
const AdminPanel = React.lazy(() => import('./AdminPanel'));

function LoadingSpinner() {
  return <p>Đang tải trang admin...</p>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link>{' | '}
        <Link to="/admin">Admin</Link>
      </nav>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
