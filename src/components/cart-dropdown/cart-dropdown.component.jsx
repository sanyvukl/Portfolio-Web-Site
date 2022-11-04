import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.style.scss";


const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const hideCart = () => setIsCartOpen(false);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items-container">
                {cartItems.length ?
                    (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    )))
                    : <div className="empty-message">Your cart is empty</div>
                }
            </div>
            <Link className="checkout-button" to="/checkout" onClick={hideCart}>
                <Button>GO TO CHEKOUT</Button>
            </Link>
        </div>
    );
};

export default CartDropdown;
