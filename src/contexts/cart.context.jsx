import { useEffect } from "react";
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
    removeCartItem: () => [],
    removeItemFromCart: () => [],
    setCartCount: () => null,
    cartCount: null,
    total: null,
});

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
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
const clearCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if (existingCartItem) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
};
const removeOneCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
    if (existingCartItem.quantity > 1) {
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...productToRemove, quantity: productToRemove.quantity - 1 } : cartItem);
    }
};
const findTotal = (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newQuntity = cartItems.reduce((allQuantity, increment) => allQuantity + increment.quantity, 0);
        setCartCount(newQuntity);
    }, [cartItems, cartTotal]);
    useEffect(() => {
        setCartTotal(findTotal(cartItems));
    }, [cartItems, cartCount]);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        // setCartCount(cartCount + 1);
    };
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeOneCartItem(cartItems, productToRemove));
    };
    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, setCartCount, clearItemFromCart, removeItemFromCart, cartTotal };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
