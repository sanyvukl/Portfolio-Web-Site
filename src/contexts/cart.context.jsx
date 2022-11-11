import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
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
    setCartCount: () => 0,
    cartCount: 0,
    cartTotal: 0,
});
const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};
const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    total: 0,
};

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in userReduser`);
    };
};
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

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { isCartOpen, cartItems, cartCount, cartTotal } = state;

    const updateCartItemsReducer = (newCartItems/*, newIsCartOpen = false*/) => {
        const newTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity,
            0
        );
        const newCartCount = newCartItems.reduce(
            (all, increment) => all + increment.quantity,
            0
        );
        dispatch(createAction(
            CART_ACTION_TYPES.SET_CART_ITEMS,
            {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newTotal,
                // isCartOpen: newIsCartOpen, 
            }
        ));
    };
    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool ));
    };
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };
    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };
    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearCartItem(cartItems, productToClear);
        updateCartItemsReducer(newCartItems);
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        clearItemFromCart,
        removeItemFromCart,
        cartTotal,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


    //     dispatch({ type: CART_ACTION_TYPES.SET_CART_COUNT });
    // }, [cartItems, cartTotal]);
    // useEffect(() => {
    //     dispatch({ type: CART_ACTION_TYPES.FIND_TOTAL });
    // }, [cartItems, cartCount]);
// const setIsCartOpen = (isCartOpen) => {
//     dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isCartOpen });
// };
// const addItemToCart = (productToAdd) => {
//     dispatch({ type: CART_ACTION_TYPES.ADD_CART_ITEM, payload: productToAdd });
// };
// const removeItemFromCart = (productToRemove) => {
//     dispatch({
//         type: CART_ACTION_TYPES.REMOVE_CART_ITEM,
//         payload: productToRemove,
//     });
// };
// const clearItemFromCart = (productToClear) => {
//     dispatch({
//         type: CART_ACTION_TYPES.CLEAR_CART_ITEM,
//         payload: productToClear,
//     });
// };


// case CART_ACTION_TYPES.ADD_CART_ITEM:
//             return {
//                 ...state,
//                 cartItems: addCartItem(cartItems, payload)
//             };
//         case CART_ACTION_TYPES.CLEAR_CART_ITEM:
//             return { ...state, cartItems: clearCartItem(cartItems, payload) };
//         case CART_ACTION_TYPES.REMOVE_CART_ITEM:
//             return { ...state, cartItems: removeCartItem(cartItems, payload) };
//         case CART_ACTION_TYPES.SET_CART_COUNT:
//             return { ...state, cartCount: setCartCount(cartItems) };
//         case CART_ACTION_TYPES.FIND_TOTAL:
//             return { ...state, total: findTotal(cartItems) };
// const setCartCount = (cartItems) => {
//     return cartItems.reduce(
//         (allQuantity, increment) => allQuantity + increment.quantity,
//         0
//     );
// };
// const findTotal = (cartItems) => {
//     return cartItems.reduce(
//         (total, cartItem) => total + cartItem.price * cartItem.quantity,
//         0
//     );
// };