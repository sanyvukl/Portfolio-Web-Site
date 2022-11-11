import { ShoppingIcon, CartItemContainer, ItemCount } from "./cart-icon.style";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartItemContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>
                {cartCount}
            </ItemCount>
        </CartItemContainer>
    );
}

export default CartIcon;