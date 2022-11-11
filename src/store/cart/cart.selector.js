import { createSelector } from "@reduxjs/toolkit";

export const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [(state) => state.cart],
  (cart) => cart.isCartOpen
);
export const selectCartItems = createSelector(
  [(state) => state.cart],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce((all, increment) => all + increment.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )
);

