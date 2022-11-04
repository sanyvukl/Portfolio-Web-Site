import { createContext, useState } from "react";

export const CartContext = createContext({
    cartProducts: false,
    setCartProducts: () => { },

    cartItems: [
        {
            id: "",
            name: "",
            imageUrl: "",
            price: "",
            quantity: "",
        },
    ],
    addItemToCart: () => [],

    cartCount: null,
    setCartCount: () => null
});

const addCartItem = (cartItems, productToAdd) => {
    const isExist = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (isExist) {
        return cartItems.map((cartItem)=>
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem);
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }

    // My clean code
    // if (productToAdd.quantity === undefined) {
    //     productToAdd.quantity = 0;
    // }
    // if (cartItems.includes(productToAdd) && productToAdd.quantity > 0) {
    //     productToAdd.quantity++;
    //     console.log(cartItems);
    //     return [...cartItems];
    // }
    // if (productToAdd.quantity < 1 && productToAdd.quantity !== undefined) {
    //     productToAdd.quantity++;
    //     return [...cartItems, productToAdd];
    // }
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        // setCartCount(cartCount + 1);
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, setCartCount };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
