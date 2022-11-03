import { createContext, useState } from "react";

// Just Example
export const BusketContext = createContext({
    cartProducts: [],
    setCartProducts: () => [null]
});

export const BusketProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const value = { cartProducts, setCartProducts };
    return <BusketContext.Provider value={value}>{children}</BusketContext.Provider>
};