import { createContext, useState } from "react";

// Just Example
export const CartContext = createContext({
    cartProducts: false,
    setCartProducts: () => {}
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};