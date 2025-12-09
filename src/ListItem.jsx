// Exercises 2.1 & 2.2 – ListItem + React.memo
import React from 'react';

function ListItem({ item, onDelete }) {
  console.log('Render item', item.id);
  return (
    <li>
      {item.name}{' '}
      {onDelete && (
        <button onClick={() => onDelete(item.id)}>
          Delete
        </button>
      )}
    </li>
  );
}

export default React.memo(ListItem);
