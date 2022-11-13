import CART_ACTION_TYPES from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// Helper Funtions
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};
const clearCartItem = (cartItems, productToClear) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToClear.id
  );
  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
  }
};
const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...productToRemove, quantity: productToRemove.quantity - 1 }
        : cartItem
    );
  }
};
// Main Funtions
export const setIsCartOpen = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};
export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};
