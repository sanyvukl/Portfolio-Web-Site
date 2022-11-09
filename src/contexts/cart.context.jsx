import { useEffect, createContext, useReducer } from "react";

export const CartContext = createContext({
    isCartOpen: false,
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
    clearCartItem: () => [],
    setCartCount: () => null,
    cartCount: null,
    total: null,
});
export const cartReducer = (state, action) => {
    const { type, payload } = action;
    const { cartItems } = state;
    console.log(payload);

    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return { ...state, isCartOpen: payload };
        case CART_ACTION_TYPES.ADD_CART_ITEM:
            return { ...state, cartItems: addCartItem(cartItems, payload) };
        case CART_ACTION_TYPES.CLEAR_CART_ITEM:
            return { ...state, cartItems: clearCartItem(cartItems, payload) };
        case CART_ACTION_TYPES.REMOVE_CART_ITEM:
            return { ...state, cartItems: removeCartItem(cartItems, payload) };
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return { ...state, cartCount: setCartCount(cartItems) };
        case CART_ACTION_TYPES.FIND_TOTAL:
            return { ...state, total: findTotal(cartItems) };
        default:
            throw new Error(`Unhandled type ${type} in userReduser`);
    };
};
const CART_ACTION_TYPES = {
    ADD_CART_ITEM: "ADD_CART_ITEM",
    CLEAR_CART_ITEM: 'CLEAR_CART_ITEM',
    REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    FIND_TOTAL: 'FIND_TOTAL',
};
const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [
        // {
        //     id: "",
        //     name: "",
        //     imageUrl: "",
        //     price: "",
        //     quantity: "",
        // },
    ],
    addItemToCart: () => [],
    removeCartItem: () => [],
    clearCartItem: () => [],
    setCartCount: () => null,
    cartCount: null,
    total: null,
};
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
};
const clearCartItem = (cartItems, productToClear) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToClear.id);
    if (existingCartItem) {
        return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
    }
};
const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
    if (existingCartItem.quantity > 1) {
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...productToRemove, quantity: productToRemove.quantity - 1 } : cartItem);
    }
};
const setCartCount = (cartItems) => {
    return cartItems.reduce((allQuantity, increment) => allQuantity + increment.quantity, 0);
};
const findTotal = (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { isCartOpen, cartItems, cartCount, cartTotal } = state;

    useEffect(() => {
        dispatch({ type: CART_ACTION_TYPES.SET_CART_COUNT });
    }, [cartItems, cartTotal]);
    useEffect(() => {
        dispatch({ type: CART_ACTION_TYPES.FIND_TOTAL })
    }, [cartItems, cartCount]);

    const setIsCartOpen = (isCartOpen) => {
        dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isCartOpen })
    };
    const addItemToCart = (productToAdd) => {
        dispatch({ type: CART_ACTION_TYPES.ADD_CART_ITEM, payload: productToAdd });
    };
    const removeItemFromCart = (productToRemove) => {
        dispatch({ type: CART_ACTION_TYPES.REMOVE_CART_ITEM, payload: productToRemove });
    };
    const clearItemFromCart = (productToClear) => {
        dispatch({ type: CART_ACTION_TYPES.CLEAR_CART_ITEM, payload: productToClear });
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, clearItemFromCart, removeItemFromCart, cartTotal };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
// useEffect(() => {
    //     const newQuntity = cartItems.reduce((allQuantity, increment) => allQuantity + increment.quantity, 0);
    //     setCartCount(newQuntity);
    // }, [cartItems, cartTotal]);
    // useEffect(() => {
    //     setCartTotal(findTotal(cartItems));
    // }, [cartItems, cartCount]);
    // const addItemToCart = (productToAdd) => {
    //     setCartItems(addCartItem(cartItems, productToAdd));
    //     // setCartCount(cartCount + 1);
    // };
    // const removeItemFromCart = (productToRemove) => {
    //     setCartItems(removeCartItem(cartItems, productToRemove));
    // };
    // const clearItemFromCart = (productToClear) => {
    //     setCartItems(clearCartItem(cartItems, productToClear));
    // };
