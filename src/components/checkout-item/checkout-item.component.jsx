import { CheckoutItemContainer, CheckoutImageContainer, RemoveButton } from "./checkout-item.style";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearCartItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={imageUrl} alt={name} />
            </CheckoutImageContainer>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={addItemHandler}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={removeItemHandler}>&#10095;</span>
            </span>
            <span className="price">${price}</span>
            <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}
export default CheckoutItem;