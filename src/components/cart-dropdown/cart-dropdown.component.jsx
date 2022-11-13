import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from "./cart-dropdown.style";

import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(false));
        navigate("/checkout");
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ?
                    (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    )))
                    : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHEKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
