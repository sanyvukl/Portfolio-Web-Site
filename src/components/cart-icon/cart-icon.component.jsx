import "./cart-icon.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    
    return (<div className="cart-icon-container" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="icon-count">{/*cartProducts.length*/}</span>
    </div>
    )
}

export default CartIcon;