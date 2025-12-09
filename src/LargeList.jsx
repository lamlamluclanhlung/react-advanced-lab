// Exercises 2.1 & 2.2 – LargeList with useMemo & useCallback
import React, { useMemo, useCallback } from 'react';
import ListItem from './ListItem';

export default function LargeList({ items, sortKey, onDelete }) {
  // 2.1 – Tối ưu sort với useMemo
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    const arr = [...items];
    arr.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });
    return arr;
  }, [items, sortKey]);

  // 2.2 – Ổn định callback với useCallback
  const handleDelete = useCallback(
    (id) => {
      if (!onDelete) return;
      onDelete(id);
    },
    [onDelete]
  );

  return (
    <ul>
      {sortedItems.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
