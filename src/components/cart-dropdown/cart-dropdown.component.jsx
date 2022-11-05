import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.style.scss";


const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        setIsCartOpen(false);
        navigate("/checkout");
    };

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
            <Button onClick={goToCheckoutHandler}>GO TO CHEKOUT</Button>
        </div>
    );
};

export default CartDropdown;
