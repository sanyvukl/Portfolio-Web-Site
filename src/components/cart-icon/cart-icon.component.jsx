import "./cart-icon.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { useEffect } from "react";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems, cartCount, setCartCount } = useContext(CartContext);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    
    useEffect(() => {
        const newQuntity = cartItems.reduce((allQuantity, increment) => allQuantity + increment.quantity, 0);
        setCartCount(newQuntity);
    }, [cartItems]);

    return (<div className="cart-icon-container" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="icon-count">{cartCount}</span>
    </div>
    )
}

export default CartIcon;