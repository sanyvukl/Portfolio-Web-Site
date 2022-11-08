import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ShoppingIcon,CartItemContainer, ItemCount } from "./cart-icon.style";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleCart = () => setIsCartOpen(!isCartOpen);

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