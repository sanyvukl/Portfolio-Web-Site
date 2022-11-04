import "./cart-icon.style.scss";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems, cartCount, setCartCount } = useContext(CartContext);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    setCartCount(cartItems.reduce((allQuantity, increment) => allQuantity + increment.quantity, 0))
    
    return (<div className="cart-icon-container" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="icon-count">{cartCount}</span>
    </div>
    )
}

export default CartIcon;