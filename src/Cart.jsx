// Exercise 1.2 – Cart UI
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  clearCart,
  selectCart,
  selectCartTax,
} from './store/cartSlice';

const DUMMY_PRODUCTS = [
  { id: 'p1', name: 'iPhone', price: 1000 },
  { id: 'p2', name: 'MacBook', price: 2000 },
];

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const tax = useSelector(selectCartTax);

  return (
    <div>
      <h2>Products</h2>
      {DUMMY_PRODUCTS.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}{' '}
          <button onClick={() => dispatch(addItem(p))}>Add</button>
        </div>
      ))}

      <hr />

      <h2>Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = $
            {item.price * item.quantity}{' '}
            <button onClick={() => dispatch(removeItem(item.id))}>-</button>
          </li>
        ))}
      </ul>

      <p>Total: ${cart.totalAmount.toFixed(2)}</p>
      <p>Tax (10%): ${tax.toFixed(2)}</p>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}
