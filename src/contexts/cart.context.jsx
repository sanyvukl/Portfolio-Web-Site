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
    removeItemFromCart: () => [],
    increaseQuantity: () => [],
    decreaseQuantity: () => [],
    cartCount: null,
    setCartCount: () => null,
    totalValue: null,
});

const addCartItem = (cartItems, productToAdd) => {
    const isExist = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (isExist) {
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
const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};
const increaseQuantity = (cartItems, productToIncrease) => {
    return cartItems.map(cartItem => cartItem.id === productToIncrease.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
};
const decreaseQuantity = (cartItems, productToDecrease) => {
    return cartItems.map(cartItem => cartItem.id === productToDecrease.id
        ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity }
        : cartItem
    );
};
const findTotalValue = (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(()=>{
            setTotalValue(findTotalValue(cartItems));
    },[cartItems, cartCount]);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        // setCartCount(cartCount + 1);
    };
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };
    const increaseCartItemQuantity = (productToIncrease) => {
        setCartItems(increaseQuantity(cartItems, productToIncrease));
    };
    const decreaseCartItemQuantity = (productToIncrease) => {
        setCartItems(decreaseQuantity(cartItems, productToIncrease));
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, setCartCount, removeItemFromCart, increaseCartItemQuantity, decreaseCartItemQuantity, totalValue };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
