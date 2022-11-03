import { createContext, useState } from "react";

// Just Example
export const CartContext = createContext({
    cartProducts: [],
    setCartProducts: () => [null]
});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const value = { cartProducts, setCartProducts };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};