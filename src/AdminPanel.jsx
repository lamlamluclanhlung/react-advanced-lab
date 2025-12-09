// Exercise 2.3 – Heavy admin page (simulated)
import React from 'react';

export default function AdminPanel() {
  return (
    <div>
      <h2>Admin Panel – Analytics</h2>
      <p>
        Đây là trang admin nặng (giả lập có nhiều chart, table...),
        được lazy-load bằng React.lazy.
      </p>
    </div>
  );
}
