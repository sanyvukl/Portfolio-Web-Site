import "./cart-icon.style.scss";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from "../../contexts/cart-products.context";

const CartIcon = () => {
    const { cartProducts } = useContext(CartContext);
    
    return (<div className="cart-icon-container">
        <ShoppingIcon className="shopping-icon" />
        <span className="icon-count">{cartProducts.length}</span>
    </div>
    )
}

export default CartIcon;