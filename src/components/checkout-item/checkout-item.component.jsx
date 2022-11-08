import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItemContainer, CheckoutImageContainer, RemoveButton } from "./checkout-item.style";

const CheckoutItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearCartItemHandler = () => clearItemFromCart(cartItem);

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