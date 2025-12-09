// Exercise 1.2 – Redux Toolkit cart slice

import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [],       // [{id, name, price, quantity}]
  totalAmount: 0,  // tổng tiền
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload; // {id, name, price}
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalAmount += item.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existing = state.items.find((i) => i.id === id);
      if (!existing) return;
      existing.quantity -= 1;
      state.totalAmount -= existing.price;
      if (existing.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Basic selector
export const selectCart = (state) => state.cart;

// Challenge – memoized selector tính thuế 10%
export const selectCartTax = createSelector(
  [selectCart],
  (cart) => cart.totalAmount * 0.1
);
